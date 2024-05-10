"use client"

import React, { useEffect, useRef, useState } from "react"
import { GridColDef } from "@mui/x-data-grid"
import log from "@/utils/log"
import doAxios from "@/utils/doAxios"
import { OrderDataGridT, OrderT, UserT } from "@/types"
import { handleResData } from "@/utils"
import { produce } from "immer"
import SpinLoader from "@/components/_common/SpinLoader"
import ActionsMenu from "@/components/_common/datagrid/ActionsMenu"
import texts from "@/texts"
import nav from "@/router"
import { useRouter } from "next/navigation"
import MenuItem from "@mui/material/MenuItem"
import DataGrid from "@/components/_common/datagrid/DataGrid"
import Avatars from "@/components/dashboard/orders/datagrid/Avatars"
import authStore from "@/stores/authStore"

const OrdersPage = () => {
  const dataGridRef = useRef<HTMLDivElement | null>(null)
  const [tableWidth, setTableWidth] = useState<number>()

  const user = authStore((state) => state.user)
  const router = useRouter()

  const [tableData, setTableData] = useState<OrderT[]>()
  const [gridRows, setGridRows] = useState<OrderT[]>([])
  const [colsCount, setColsCount] = useState<number>()
  const [isLoading, setIsLoading] = useState(true)

  const loadData = () => {
    doAxios("/orders", "get", true).then((res) => {
      handleResData(res, setTableData)
    })
  }

  useEffect(() => {
    loadData()

    if (!dataGridRef.current) return
    setTableWidth(dataGridRef.current?.getBoundingClientRect()?.width)
  }, [])

  useEffect(() => {
    const rows: OrderDataGridT[] = []
    tableData?.forEach((order, idx) => {
      rows.push({
        id: order.id,
        order_number: order.order_number,
        due_date: new Date(order.due_date),
        payment_date: order.payment_date ? new Date(order.payment_date) : null,
        created_at: new Date(order.created_at),
        has_access: order.has_access,
        order_users: order.order_users,
      })
    })

    if (rows[0]) {
      setColsCount(Object.keys(rows[0]).length)
    }

    setGridRows(
      produce((draft) => {
        return rows
      })
    )

    setIsLoading(false)
  }, [tableData])

  const getColumnWidth = (): number => {
    if (!(tableWidth && colsCount)) return 100

    return tableWidth / colsCount
  }

  const columns: GridColDef[] = [
    {
      field: "order_number",
      headerName: texts.orders.dataGrid.headers.orderNumber,
      type: "number",
      width: getColumnWidth(),
      minWidth: 100,
      editable: false,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "due_date",
      headerName: texts.orders.dataGrid.headers.dueDate,
      type: "dateTime",
      editable: true,
      width: getColumnWidth(),
      minWidth: 100,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "payment_date",
      headerName: texts.orders.dataGrid.headers.paymentDate,
      type: "dateTime",
      width: getColumnWidth(),
      minWidth: 100,
      editable: true,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "created_at",
      headerName: texts.orders.dataGrid.headers.createdAt,
      type: "dateTime",
      width: getColumnWidth(),
      minWidth: 100,
      editable: true,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "has_access",
      headerName: texts.orders.dataGrid.headers.has_access,
      type: "boolean",
      width: getColumnWidth(),
      minWidth: 100,
      editable: false,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "order_users",
      headerName: texts.orders.dataGrid.headers.order_users,
      width: getColumnWidth(),
      minWidth: 100,
      editable: false,
      align: "left",
      headerAlign: "left",
      renderCell: (params) => {
        const users = (params.row as { order_users: UserT[] }).order_users
        return <Avatars users={users} />
      },
    },
    {
      field: "Actions",
      headerName: texts.dataGrid.headers.actions,
      width: getColumnWidth(),
      minWidth: 100,
      type: "actions",
      renderCell: (params) => {
        const rowParams = params.row as { id: number; has_access: boolean }
        const orderId = rowParams.id
        const hasAccess = (user && user.is_admin) || rowParams.has_access
        return (
          <ActionsMenu
            datagridPage="orders"
            id={orderId}
            handleReloadData={() => loadData()}
            additionalActionItems={
              <MenuItem
                onClick={() => nav("order-items", router, false, orderId)}
              >
                {texts.orders.actionsMenu.menuItems.orderItems}
              </MenuItem>
            }
            permissions={{
              view: true,
              edit: hasAccess,
              delete: hasAccess,
            }}
          />
        )
      },
    },
  ]

  return (
    <div
      ref={dataGridRef}
      className="w-full"
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <SpinLoader />
        </div>
      ) : (
        <DataGrid
          rows={gridRows}
          columns={columns}
          createRoute="orders.create"
        />
      )}
    </div>
  )
}
export default OrdersPage
