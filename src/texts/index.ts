const texts = {
  login: {
    title: "Login",
    inputs: {
      email: "Email Address",
      password: "Password",
    },
    buttons: {
      logIn: "Log In",
      forgotPassword: "Forgot Password?",
    },
    resetPasswordConfirmationDialog: {
      okBtn: "Okay",
      reset: {
        title: "Reset Password Confirmation",
        description:
          "Password reset confirmation email was sent to you, check your inbox.",
      },
      change: {
        title: "Password Changed",
        description:
          "Your password has been changed, you can log in with it now.",
      },
    },
    resetPasswordDialog: {
      title: "Reset Password",
      inputs: {
        email: "Email Address",
      },
      buttons: {
        cancel: "Cancel",
        submit: "Reset",
      },
    },
    changePasswordDialog: {
      title: "Change Password",
      inputs: {
        password: "Password",
        password_confirmation: "Repeat Password",
      },
      buttons: {
        cancel: "Cancel",
        submit: "Change",
      },
    },
  },
  topMenu: {
    avatar: {
      profile: "Profile",
      changePassword: "Change Password",
      logout: "Logout",
    },
  },
  user: {
    profile: {
      form: {
        email: "Email",
        firstname: "First Name",
        lastname: "Last Name",
        saveBtn: "Save",
      },
    },
    changePassword: {
      form: {
        currentPassword: "Current Password",
        newPassword: "New Password",
        newPasswordRepeat: "Repeat New Password",
        saveBtn: "Save",
      },
    },
  },
  footer: {
    copyright: "Copyright ©",
  },
  actionsMenu: {
    title: "Actions",
    view: "View",
    edit: "Edit",
    delete: "Delete",
    confirmDialog: {
      titleItemRemoval: "Are you sure you want to remove this item?",
    },
  },
  drawerMenu: {
    secondSection: {
      title: "Administrator",
    },
  },
  orders: {
    form: {
      common: {
        dueDate: {
          label: "Payment Due Date",
        },
      },
      create: {
        button: "Create",
      },
      update: {
        button: "Save",
        paymentDate: {
          label: "Payment Date",
        },
        createdAtDate: {
          label: "Created At Date",
        },
      },
      view: {
        button: "Back",
      },
    },
    actionsMenu: {
      menuItems: {
        orderItems: "Order Items",
      },
    },
    dataGrid: {
      headers: {
        orderNumber: "Order Number",
        dueDate: "Due Date",
        paymentDate: "Payment Date",
        createdAt: "Created At",
      },
    },
    orderItems: {
      dataGrid: {
        headers: {
          name: "Item Name",
          count: "Count",
          cost: "Cost",
          vat: "VAT",
          cost_with_vat: "Cost with VAT",
        },
        confirmDialog: {
          inRowEditConfirm: "Are you sure you want to update row data?",
        },
      },
      form: {
        common: {
          name: {
            label: "Item Name",
          },
          count: {
            label: "Count",
          },
          cost: {
            label: "Cost (€)",
          },
          vat: {
            label: "VAT",
          },
        },
        create: {
          button: "Create",
        },
        update: {
          button: "Save",
        },
        view: {
          cost_with_vat: {
            label: "Cost with VAT (€)",
          },
        },
      },
    },
  },
  users: {
    form: {
      common: {
        firstname: {
          label: "First Name",
        },
        lastname: {
          label: "Last Name",
        },
        email: {
          label: "Email",
        },
        password: {
          label: "Password",
        },
        password_confirmation: {
          label: "Repeat Password",
        },
        is_admin: {
          label: "Is Administrator?",
        },
      },
      create: {
        button: "Create",
      },
      update: {
        button: "Update",
      },
    },
    dataGrid: {
      headers: {
        firstname: "First Name",
        lastname: "Last Name",
        email: "Email",
        is_admin: "Is Administrator?",
      },
    },
  },
  confirmDialog: {
    button: {
      confirm: "Confirm",
      decline: "Decline",
    },
  },
  dataGrid: {
    toolbar: {
      button: {
        back: "Back",
        create: "Create",
      },
    },
    headers: {
      actions: "Actions",
    },
  },
  select: {
    trueFalse: {
      yes: "Yes",
      no: "No",
    },
  },
}
export default texts
