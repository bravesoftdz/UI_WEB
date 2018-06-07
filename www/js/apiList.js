var apiList ={
  "User": {
    "Login": {
      "brief": "Login",
      "request": {
        "data": {
          "UserName": "admin",
          "Password": "admin"
        },
        "params": {
          "UserName": {
            "brief": "The login user name. The default value is admin."
          },
          "Password": {
            "brief": "The login user name. The default value is admin."
          }
        }
      },
      "response": {
        "result": {
          "jsonrpc": "2.0",
          "result": {},
          "id": "5.4"
        }
      },
      "errorCode": {
        "010101": "Username or Password is not correct.",
        "010102": "Other user is login.",
        "010103": "If the user login error 5 times, this user can login until the device reboot.",
        "010104": "If disable guest ap ui access, guest ap can’t access webui."
      }
    },
    "Logout": {
      "brief": "Logout",
      "request": {
        "data": {}
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "010201": "Logout failed."
      }
    },
    "GetLoginState": {
      "brief": "Get Login State",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "State": 1
        },
        "params": {
          "State": {
            "brief": "Login State",
            "item": {
              "0": "logout",
              "1": "logined",
              "2": "the login times used out."
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "State": 1
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "010301": "Get login state failed."
      }
    },
    "ChangePassword": {
      "brief": "",
      "request": {
        "data": {
          "UserName": "admin",
          "CurrPassword": "admin",
          "NewPassword": "admin"
        },
        "params": {
          "UserName": {
            "brief": "Current Username"
          },
          "CurrPassword": {
            "brief": "Current Password"
          },
          "NewPassword": {
            "brief": "The newpassword"
          }
        }
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "010401": "Change password failed.",
        "010402": "The current password is wrong."
      }
    },
    "HeartBeat": {
      "brief": "The web server check if the client is living when the client login. If web server can’t receive this method, web server will logout this client.",
      "request": {
        "data": {}
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "010501": "This method is wrong.",
        "010502": "Other user login."
      }
    },
    "ForceLogin": {
      "brief": "",
      "request": {
        "data": {
          "UserName": "admin",
          "Password": "admin"
        },
        "params": {
          "UserName": {
            "brief": "The login user name. The default value is admin."
          },
          "Password": {
            "brief": "The login user name. The default value is admin."
          }
        }
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "010601": "Username or Password is not correct.",
        "010602": "If the user login error 5 times, this user can login until the device reboot."
      }
    }
  },
  "SIM": {
    "GetSimStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SIMState": 0,
          "PinState": 0,
          "PinRemainingTimes": 0,
          "PukRemainingTimes": 0,
          "SIMLockState": -1,
          "SIMLockRemainingTimes": 0
        },
        "params": {
          "SIMState": {
            "brief": "",
            "item": {
              "0": "nown",
              "1": "SIM Card detected;",
              "2": "PIN Required;",
              "3": "PUK Required;",
              "4": "SIM Lock required;",
              "5": "PUK times used out;",
              "6": "SIM card illegal;",
              "7": "SIM card ready;",
              "11": "SIM card is initing;"
            }
          },
          "PinState": {
            "brief": "",
            "item": {
              "0": "unknown",
              "1": "enable but not verified",
              "2": "PIN enable verified",
              "3": "PIN disable",
              "4": "PUK required",
              "5": "PUK times used out;"
            }
          },
          "PinRemainingTimes": {
            "brief": "Pin remaining times"
          },
          "PukRemainingTimes": {
            "brief": "Puk remaining times"
          },
          "SIMLockState": {
            "brief": "",
            "item": {
              "0": "nck",
              "1": "nsck",
              "2": "spck",
              "3": "cck",
              "4": "pck",
              "30": "rck forbid",
              "-1": "no simlock/sim lock unlock",
              "15,16,17,18,19": "rck"
            }
          },
          "SIMLockRemainingTimes": {
            "brief": "SIMLockremaining times"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SIMState": 7,
            "PinState": 3,
            "PinRemainingTimes": 3,
            "PukRemainingTimes": 10,
            "SIMLockState": -1,
            "SIMLockRemainingTimes": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "020101": "Get SIM statusfailed"
      }
    },
    "UnlockPin": {
      "brief": "",
      "request": {
        "data": {
          "Pin": "1234"
        },
        "params": {
          "Pin": {
            "brief": "Pin code"
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020201": "Verify Pin code failed."
      }
    },
    "UnlockPuk": {
      "brief": "",
      "request": {
        "data": {
          "Puk": "12345678",
          "Pin": "1234"
        },
        "params": {
          "Puk": {
            "brief": "Puk code"
          },
          "Pin": {
            "brief": "Pin code"
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020301": "Verify PUK code failed."
      }
    },
    "ChangePinCode": {
      "brief": "",
      "request": {
        "data": {
          "CurrentPin": "1111",
          "NewPin": "1234"
        },
        "params": {
          "CurrentPin": {
            "brief": "The current PIN code."
          },
          "NewPin": {
            "brief": "The target PIN Code that want to change."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020401": "Change PIN code failed."
      }
    },
    "ChangePinState": {
      "brief": "",
      "request": {
        "data": {
          "Pin": "1234",
          "State": 1
        },
        "params": {
          "Pin": {
            "brief": "The current PIN code."
          },
          "State": {
            "brief": "",
            "item": {
              "0": "PIN Disabled",
              "1": "PIN Enabled"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020501": "Change Pin state failed."
      }
    },
    "GetAutoValidatePinState": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "State": 0
        },
        "params": {
          "State": {
            "brief": "",
            "item": {
              "0": "Disabled",
              "1": "Enabled"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "State": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "020601": "Get auto pin State failed."
      }
    },
    "SetAutoValidatePinState": {
      "brief": "When the SIM Card status is required PIN, this function can verify the PIN code.",
      "request": {
        "data": {
          "State": 0,
          "Pin": "1234"
        },
        "params": {
          "Pin": {
            "brief": "The current PIN code."
          },
          "State": {
            "brief": "",
            "item": {
              "0": "Disabled",
              "1": "Enabled"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020701": "Set auto pin State failed."
      }
    },
    "UnlockSimlock": {
      "brief": "",
      "request": {
        "data": {
          "SIMLockState": "1"
        },
        "SIMLockCode": "12314564"
      },
      "params": {
        "SIMLockState": {
          "brief": "",
          "item": {
            "0": "nck",
            "1": "nsck",
            "2": "spck",
            "3": "cck",
            "4": "pck",
            "15,16,17,18,19": "rck"
          }
        },
        "SIMLockCode": {
          "brief": "SIM lock code"
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020801": "Unlock SIM lock failed."
      }
    },
    "ActiveSimlock": {
      "brief": "",
      "request": {
        "data": {
          "State": 0
        },
        "params": {
          "State": {
            "brief": "",
            "item": {
              "0": "active"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "020901": "Active SIM lock failed.",
        "020902": "PLMN code is null."
      }
    },
    "EraseSimlock": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "021001": "Erase SIM lock failed."
      }
    },
    "GetPhoneNumber": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "phoneNumber": "012345678"
        },
        "params": {
          "phoneNumber": {
            "brief": "phoneNumber  char"
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "021101": "Get Phone Number failed."
      }
    }
  },
  "Connection": {
    "GetConnectionState": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "ConnectionStatus": 0,
          "IPv4Adrress": "0.0.0.0",
          "IPv6Adrress": "0::0",
          "ConnectProfile": "china unicom",
          "DlRate": 42200000,
          "UlRate": 5742000,
          "UlBytes": 15351,
          "DlBytes": 12535,
          "ConnectionTime": 119
        },
        "params": {
          "ConnectionStatus": {
            "brief": "",
            "item": {
              "0": "disconnected",
              "1": "connecting",
              "2": "connected",
              "3": "disconnecting"
            }
          },
          "IPv4Adrress": {
            "brief": "Connected ipv4 address"
          },
          "IPv6Adrress": {
            "brief": "Connected ipv6 address"
          },
          "ConnectProfile": {
            "brief": "Current connect profile ‘s id, id reference profile list."
          },
          "DlRate": {
            "brief": "Current download rate (bps)"
          },
          "UlRate": {
            "brief": "Current upload rate (bps)"
          },
          "UlBytes": {
            "brief": "Upload bytes(B)"
          },
          "DlBytes": {
            "brief": "Download bytes(B)"
          },
          "ConnectionTime": {
            "brief": "ConnectionTime (s)"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "ConnectionStatus": 0,
            "IPv4Adrress": "0.0.0.0",
            "IPv6Adrress": "0::0",
            "ConnectProfile": "UNICOM",
            "DlRate": 7200000,
            "UlRate": 2000000,
            "UlBytes": 0,
            "DlBytes": 0,
            "ConnectionTime": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "030101": "Get connection state failed."
      }
    },
    "Connect": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "030201": "Connect failed",
        "030202": "No profile.",
        "030203": "It is not disconnect status.",
        "030204": "Data traffic is used out."
      }
    },
    "DisConnect": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "030301": "Disconnect Internetfailed.",
        "030302": "It is not connection status."
      }
    },
    "GetConnectionSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "IdleTime": 600,
          "ConnectMode": 1,
          "RoamingConnect": 1,
          "PdpType": 0
        },
        "params": {
          "IdleTime": {
            "brief": "Connection max time (option)"
          },
          "RoamingConnect": {
            "brief": "Under Roaming status if can connect:",
            "item": {
              "0": "when roaming can not connect",
              "1": "when roaming can connect"
            }
          },
          "ConnectMode": {
            "brief": "",
            "item": {
              "0": "manual connect",
              "1": "auto connect",
              "2": "connected",
              "3": "disconnecting"
            }
          },
          "PdpType": {
            "brief": "PDP connection type",
            "item": {
              "0": "IPv4",
              "1": "PPP",
              "2": "IPv6",
              "3": "IPv4v6"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "IdleTime": 600,
            "ConnectMode": 1,
            "RoamingConnect": 1,
            "PdpType": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "030401": "Get connection statefailed."
      }
    },
    "SetConnectionSettings": {
      "brief": "",
      "request": {
        "data": {
          "IdleTime": 600,
          "ConnectMode": 1,
          "RoamingConnect": 1,
          "PdpType": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "030501": "Set connection statefailed."
      }
    }
  },
  "Network": {
    "GetNetworkInfo": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "NetworkMode": 0,
          "NetselectionMode": 0,
          "PLMN": "0",
          "NetworkType": -1,
          "LAC": 0,
          "CellId": 0,
          "NetworkName": "N/A",
          "SpnName": "",
          "Roaming": 255,
          "SignalStrength": -1
        },
        "params": {
          "NetworkMode": {
            "brief": ""
          },
          "NetselectionMode": {
            "brief": ""
          },
          "PLMN": {
            "brief": "Public Land Mobile Network"
          },
          "NetworkType": {
            "brief": "Network Type",
            "item": {
              "0": "NO SERVER",
              "1": "GPRS",
              "2": "EDGE",
              "3": "HSPA",
              "4": "HSUPA",
              "5": "UMTS",
              "6": "HSPA+",
              "7": "DC-HSPA+",
              "8": "LTE",
              "9": "LTE+",
              "10": "CDMA",
              "11": "GSM",
              "12": "EVDO",
              "13": "LTE-FDD",
              "14": "LTE-TDD",
              "15": "CDMA-->Ehrpd"
            }
          },
          "LAC": {
            "brief": "Location Area Code, a decimal value. Reserved this filed, not implemented. Return value is empty string currently"
          },
          "CellID": {
            "brief": "Cell ID as a decimal value Reserved this filed, not implemented. Return value is empty string currently"
          },
          "RncID": {
            "brief": "RNC ID as a decimal value;Reserved this filed, not implemented. Return value is empty string currently"
          },
          "NetworkName": {
            "brief": "operator name"
          },
          "SpnName": {
            "brief": "SPN  name"
          },
          "Roaming": {
            "brief": "Roaming State",
            "item": {
              "0": "roaming",
              "1": " no roaming"
            }
          },
          "SignalStrength": {
            "brief": "RSSI value",
            "item": {
              "0": "level 0",
              "1": "level 1",
              "2": "level 2",
              "3": "level 3",
              "4": "level 4",
              "-1": "No service"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "NetworkMode": 0,
            "NetselectionMode": 0,
            "PLMN": "46001",
            "NetworkType": 8,
            "LAC": 65534,
            "CellId": 112013833,
            "NetworkName": "UNICOM",
            "SpnName": "",
            "Roaming": 1,
            "SignalStrength": 4
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "040101": "Get network information data error."
      }
    },
    "SearchNetwork": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "040201": "Search network failed."
      }
    },
    "SearchNetworkResult": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SearchState": 0,
          "ListNetworkItem": [
            {
              "NetworkID": 12,
              "State": 0,
              "Numberic": "46001",
              "Rat": 1,
              "FullName": "",
              "ShortName": ""
            }
          ]
        },
        "params": {
          "SearchState": {
            "brief": "",
            "item": {
              "0": "search not network",
              "1": "searching",
              "2": "search successful",
              "3": "search failed"
            }
          },
          "NetworkID": {
            "brief": "Network ID"
          },
          "State": {
            "brief": "",
            "item": {
              "0": "network unknown",
              "1": "network available",
              "2": "current register network",
              "3": "forbidden network"
            }
          },
          "Rat": {
            "brief": "",
            "item": {
              "1": "GSM ",
              "2": "UMTS",
              "3": "LTE",
              "4": "CDMA",
              "5": "unknown"
            }
          },
          "Numberic": {
            "brief": "Current network PLMN"
          },
          "FullName": {
            "brief": "network full name"
          },
          "ShortName": {
            "brief": "network short name"
          }
        },
        "result": {}
      },
      "errorCode": {
        "040301": "Get result failed."
      }
    },
    "RegisterNetwork": {
      "brief": "",
      "request": {
        "data": {
          "NetworkID": "1"
        },
        "params": {
          "NetworkID": {
            "brief": "Network ID"
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "040401": "Register network fail."
      }
    },
    "GetNetworkRegisterState": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "regist_state": 0
        },
        "params": {
          "regist_state": {
            "brief": "",
            "item": {
              "0": "not regiseter",
              "1": "registting",
              "2": "register successful",
              "3": "registration failed"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "regist_state": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "040501": "Get register network state failed."
      }
    },
    "GetNetworkSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "NetworkMode": 0,
          "NetselectionMode": 0
        },
        "params": {
          "NetworkMode": {
            "brief": "",
            "item": {
              "0": "auto mode",
              "1": "2G only",
              "2": "3G only",
              "3": "LTE only",
              "4": "GSM_LTE",
              "5": "UMTS_LTE",
              "6": "GSM_UMTS",
              "7": "CDMA_EVDO : for Y856 Sprint",
              "8": "LTE_CDMA_EVDO: for Y856 ",
              "9": "EVDO ONLY",
              "10": "CDMA_Ehrpd",
              "11": "CDMA Only(1x)"
            }
          },
          "NetselectionMode": {
            "brief": "",
            "item": {
              "0": "auto",
              "1": "manual"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "NetworkMode": 0,
            "NetselectionMode": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "040601": "Getnetwork setting failed."
      }
    },
    "SetNetworkSettings": {
      "brief": "",
      "request": {
        "data": {
          "NetworkMode": 0,
          "NetselectionMode": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "040701": "Set network setting failed.",
        "040702": "Just can set when disconnected."
      }
    },
    "GetNetworkModeListType": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "NetworkModeListType": 0
        },
        "params": {
          "NetworkModeListType": {
            "brief": "",
            "item": {
              "0": "LTE_CDMA-EVDO,CDMA-EVDO only,LTE only",
              "1": "CDMA-EVDO only",
              "2": "LTE only"
            }
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "040801": "Get NetworkModeListType failed."
      }
    },
    "GetDomRoamGuardForced": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "DomRoamGuardForced ": 0
        },
        "params": {
          "DomRoamGuardForced": {
            "brief": "",
            "item": {
              "0": "off (Allow to configure domestic roam guard)",
              "1": "on (Not allow to configure domestic roam guard)"
            }
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "040901": "Get DomRoamGuardForced failed."
      }
    },
    "GetLteForceConf": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "LteForceConf ": 0
        },
        "params": {
          "LteForceConf": {
            "brief": "",
            "item": {
              "0": "not forced (Allow to set network mode)",
              "1": "forced (Not allow to set network mode)"
            }
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "041001": "Get LteForceConf failed."
      }
    }
  },
  "Wlan": {
    "GetWlanState": {
      "brief": "Get Wifi State",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "WlanState": 0
        },
        "params": {
          "WlanState": {
            "type": "Number",
            "item": {
              "0": "off",
              "1": "on",
              "2": "WPS"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanState": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "050101": "Get WLANstatefailed."
      }
    },
    "SetWlanOff": {
      "brief": "This function work when WIFI is on.",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "050201": "WLAN is off."
      }
    },
    "SetWlanOn": {
      "brief": "This function work when WIFI is off.",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "050301": "Set WLAN on failed.",
        "050302": "WLAN is on."
      }
    },
    "GetWlanSettings": {
      "brief": "Get Wlan Settings",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "WlanAPMode": 0,
          "WMode": 3,
          "Ssid": "Play Internet 4G LTE-1D0F",
          "SsidHidden": 0,
          "Channel": 0,
          "max_numsta": 32,
          "curr_num": 0,
          "SecurityMode": 4,
          "WepType": 0,
          "WepKey": "1234567890",
          "WpaType": 2,
          "WpaKey": "41524726",
          "CountryCode": "PL",
          "ApIsolation": 1,
          "WMode_5G": 3,
          "Ssid_5G": "Play Internet 4G LTE-1D0F_5G",
          "SsidHidden_5G": 0,
          "Channel_5G": 0,
          "max_numsta_5G": 32,
          "SecurityMode_5G": 4,
          "WepType_5G": 0,
          "WepKey_5G": "1234567890",
          "WpaType_5G": 2,
          "WpaKey_5G": "41524726",
          "CountryCode_5G": "PL",
          "ApIsolation_5G": 0
        },
        "params": {
          "WlanAPMode": {
            "brief": "Wlan running mode",
            "type": "Number",
            "item": {
              "0": "2.4G",
              "1": "5G",
              "2": "2.4G and 5G"
            }
          },
          "Ssid": {
            "brief": "Ssid",
            "type": "String"
          },
          "SsidHidden": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "SecurityMode": {
            "brief": "Wlan running mode",
            "type": "Number",
            "item": {
              "0": "disable",
              "1": "wep",
              "2": "WPA",
              "3": "WPA2",
              "4": "WPA/WPA2"
            }
          },
          "CountryCode": {
            "brief": "Country Code",
            "type": "String"
          },
          "WpaType": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "TKIP",
              "1": "AES",
              "2": "AUTO"
            }
          },
          "WepType": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "OPEN",
              "1": "Share"
            }
          },
          "WpaKey": {
            "brief": "",
            "type": "String"
          },
          "WepKey": {
            "brief": "",
            "type": "String"
          },
          "Channel": {
            "brief": "The current used 2.4G WIFI Channel",
            "type": "Number",
            "item": {
              "0": "Auto",
              "1~14": "Other channel"
            }
          },
          "ApIsolation": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "WMode": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "802.11b",
              "1": "802.11b/g",
              "2": "802.11b/g/n",
              "3": "Auto"
            }
          },
          "max_numsta": {
            "brief": "2.4 G WIFI max number client",
            "type": "Number"
          },
          "curr_num": {
            "brief": "2.4 G WIFI current number client",
            "type": "Number"
          },
          "Ssid_5G": {
            "brief": "5GHz SSID",
            "type": "String"
          },
          "SsidHidden_5G": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "SecurityMode_5G": {
            "brief": "Wlan running mode",
            "type": "Number",
            "item": {
              "0": "disable",
              "1": "wep",
              "2": "WPA",
              "3": "WPA2",
              "4": "WPA/WPA2"
            }
          },
          "WpaType_5G": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "TKIP",
              "1": "AES",
              "2": "AUTO"
            }
          },
          "WepType_5G": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "OPEN",
              "1": "Share"
            }
          },
          "WpaKey_5G": {
            "brief": "",
            "type": "String"
          },
          "WepKey_5G": {
            "brief": "",
            "type": "String"
          },
          "Channel_5G": {
            "brief": "The current used 5GHz WIFI Channel",
            "type": "Number",
            "item": {
              "0": "Auto",
              "1~14": "Other channel"
            }
          },
          "ApIsolation_5G": {
            "brief": "",
            "type": "Number",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "WMode_5G": {
            "brief": "",
            "type": "Number",
            "item": {
              "3": "Auto",
              "4": "802.11a",
              "5": "802.11a/n",
              "6": "802.11a/c"
            }
          },
          "max_numsta_5G": {
            "brief": "5GHz WIFI max number client",
            "type": "Number"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanState": 0,
            "WlanAPMode": 0,
            "WMode": 3,
            "Ssid": "Play Internet 4G LTE-1D0F",
            "SsidHidden": 0,
            "Channel": 0,
            "max_numsta": 32,
            "curr_num": 0,
            "SecurityMode": 4,
            "WepType": 0,
            "WepKey": "1234567890",
            "WpaType": 2,
            "WpaKey": "41524726",
            "CountryCode": "PL",
            "ApIsolation": 1,
            "WMode_5G": 3,
            "Ssid_5G": "Play Internet 4G LTE-1D0F_5G",
            "SsidHidden_5G": 0,
            "Channel_5G": 0,
            "max_numsta_5G": 32,
            "SecurityMode_5G": 4,
            "WepType_5G": 0,
            "WepKey_5G": "1234567890",
            "WpaType_5G": 2,
            "WpaKey_5G": "41524726",
            "CountryCode_5G": "PL",
            "ApIsolation_5G": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "050401": "Get WLAN Settings failed."
      }
    },
    "SetWlanSettings": {
      "brief": "Set Wlan Settings",
      "request": {
        "data": {
          "WlanAPMode": 0,
          "WMode": 3,
          "Ssid": "Play Internet 4G LTE-1D0F",
          "SsidHidden": 0,
          "Channel": 0,
          "max_numsta": 32,
          "SecurityMode": 4,
          "WepType": 0,
          "WepKey": "1234567890",
          "WpaType": 2,
          "WpaKey": "41524726",
          "CountryCode": "PL",
          "ApIsolation": 1,
          "WMode_5G": 3,
          "Ssid_5G": "Play Internet 4G LTE-1D0F_5G",
          "SsidHidden_5G": 0,
          "Channel_5G": 0,
          "max_numsta_5G": 32,
          "SecurityMode_5G": 4,
          "WepType_5G": 0,
          "WepKey_5G": "1234567890",
          "WpaType_5G": 2,
          "WpaKey_5G": "41524726",
          "CountryCode_5G": "PL",
          "ApIsolation_5G": 0
        }
      },
      "paramsRefer": "GetWlanSettings",
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "050501": "Set WLAN Settings failed.",
        "050502": "WIFI is off, can not set.",
        "050503": "WPS is working, can not set."
      }
    },
    "SetWPSPin": {
      "brief": "",
      "request": {
        "data": {
          "WpsPin": "1234"
        },
        "params": {
          "WpsPin": {
            "brief": "The WPS PIN code.",
            "type": "Number"
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "050601": "Set WPS PIN mode failed.",
        "050602": "WPS PIN not support",
        "050603": "WPS working"
      }
    },
    "SetWPSPbc": {
      "brief": "",
      "request": {
        "data": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "050701": "Set WPS PIN mode failed.",
        "050702": "WPS PIN not support",
        "050703": "WPS working"
      }
    },
    "GetWlanSupportMode": {
      "brief": "",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "WlanAPMode": 0
        },
        "params": {
          "WlanAPMode": {
            "type": "Number",
            "brief": "",
            "item": {
              "0": "Support 2.4G",
              "1": "Support 5G",
              "2": "Support 2.4G and 5G"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanAPMode": 2
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "050801": "Get wlan support mode failed."
      }
    },
    "GetWlanStatistics": {
      "brief": "",
      "request": {
        "data": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "050101": "msg"
      }
    }
  },
  "SMS": {
    "GetSMSInitStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "Status": 1
        },
        "params": {
          "Status": {
            "brief": "The status of the SMS initing.",
            "item": {
              "0": "Complete",
              "1": "Initing"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "Status": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "060101": "Get SMS init status failed."
      }
    },
    "GetSMSContactList": {
      "brief": "",
      "request": {
        "data": {
          "Page": 1
        },
        "params": {
          "Page": {
            "brief": "Pages that SMS Contact list separate,",
            "item": {
              "0": "return all Contact SMS.",
              "1": "the first page ,every page has 10 contacts SMS list."
            }
          }
        }
      },
      "response": {
        "data": {
          "SMSContactList": [
            {
              "ContactId": 1,
              "PhoneNumber": [
                "18617092862"
              ],
              "SMSId": 65538,
              "SMSType": 1,
              "ReportStatus": 0,
              "SMSContent": "88888888554",
              "SMSTime": "2016-06-30 10:02:22",
              "UnreadCount": 2,
              "TSMSCount": 2
            }
          ],
          "Page": 0,
          "TotalPageCount": 1
        },
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SMSContactList": [],
            "Page": 1,
            "TotalPageCount": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "010101": "msg"
      }
    },
    "GetSMSContentList": {
      "brief": "",
      "request": {
        "data": {
          "Page": 0,
          "ContactId": 1
        },
        "params": {}
      },
      "response": {
        "data": {
          "SMSContentList": [
            {
              "SMSId": 65537,
              "SMSType": 6,
              "SMSContent": "hi!",
              "SMSTime": "11-09-2014 18:06:00"
            }
          ],
          "Page": 0,
          "ContactId": 1,
          "PhoneNumber": [
            "134544555"
          ],
          "TotalPageCount": 1
        },
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "error": {
            "code": "060301",
            "message": "Get SMS content list failed."
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "010101": "msg"
      }
    },
    "GetSMSStorageState": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "TUseCount": 0,
          "UnreadSMSCount": 0,
          "UnreadReport": 0,
          "LeftCount": 100,
          "MaxCount": 100
        },
        "params": {
          "TUseCount": {
            "brief": "Current store SMS total count."
          },
          "UnreadSMSCount": {
            "brief": "Current store unread SMS count. "
          },
          "UnreadReport": {
            "brief": "",
            "item": {
              "0": "no new status report",
              "1": "exit new status report"
            }
          },
          "LeftCount": {
            "brief": "The left space that store the SMS"
          },
          "MaxCount": {
            "brief": "The current max space (SMS Count) that store the SMS"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "TUseCount": 5,
            "UnreadSMSCount": 1,
            "UnreadReport": 0,
            "LeftCount": 44,
            "MaxCount": 50
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "060401": "Get SMS Storage state failed."
      }
    },
    "DeleteSMS": {
      "brief": "",
      "request": {
        "data": {
          "DelFlag": 1,
          "ContactId": 1,
          "SMSId": 1
        },
        "params": {
          "DelFlag": {
            "brief": "This flag means the SMS that want to delete.",
            "item": {
              "0": "delete all SMS",
              "1": "delete one record in Contact SMS list",
              "2": "delete one record in Content  SMS list"
            }
          },
          "ContactId": {
            "brief": "This id must be in Contact SMS list."
          },
          "SMSId": {
            "brief": "This id must be Content SMS list."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "060501": "Delete SMS failed."
      }
    },
    "SendSMS": {
      "brief": "",
      "request": {
        "data": {
          "SMSId": -1,
          "SMSContent": "Hello World",
          "PhoneNumber": [
            "+84912345"
          ],
          "SMSTime": "2017-09-11 18:06:00"
        },
        "params": {
          "SMSId": {
            "brief": "the ID of the SMS in draft,  failed send t, and snt SMS, if the value is -1 means send a new SMS."
          },
          "SMSContent": {
            "brief": "The send message content."
          },
          "PhoneNumber": {
            "brief": "The sendPhoneNumber"
          },
          "SMSTime": {
            "brief": "Time when sending sms."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "060601": "Send SMS failed.",
        "060602": "Fail still sending last message.",
        "060603": "Fail with store space full."
      }
    },
    "GetSendSMSResult": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendStatus": 1
        },
        "params": {
          "SendStatus": {
            "brief": "",
            "item": {
              "0": "none",
              "1": "sending",
              "2": "success",
              "3": "failstill sending last message",
              "4": "fail with Memory full",
              "5": "fail"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SendStatus": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "060701": "Get send SMS status failed."
      }
    },
    "SaveSMS": {
      "brief": "",
      "request": {
        "data": {
          "SMSId": 1,
          "PhoneNumber": [
            "134544555"
          ],
          "SMSContent": "hi!",
          "SMSTime": "2017-09-11 18:06:00"
        },
        "params": {
          "SMSId": {
            "brief": "the index of SMS, if savenew SMS is -1, else other."
          },
          "SMSContent": {
            "brief": "The SMS content to save."
          },
          "PhoneNumber": {
            "brief": "The phone number to save."
          },
          "SMSTime": {
            "brief": "Time when saving sms"
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "060801": "Save SMS failed.",
        "060802": "Fail with store space full."
      }
    },
    "GetSMSSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SMSCenter": "+8613010888500",
          "StoreFlag": 1,
          "SMSReportFlag": 0
        },
        "params": {
          "SMSCenter": {
            "brief": "the Center number of the SIM Card."
          },
          "StoreFlag": {
            "brief": "SMS store space",
            "item": {
              "0": "SIM Card",
              "1": "ME"
            }
          },
          "SMSReportFlag": {
            "brief": "SMS report is enable or disable",
            "item": {
              "0": "Disable",
              "1": "Enable"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SMSCenter": "+8613010888500",
            "StoreFlag": 0,
            "SMSReportFlag": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "060901": "Get short message settings failed."
      }
    },
    "SetSMSSettings": {
      "brief": "",
      "request": {
        "data": {
          "SMSCenter": "+8613010888500",
          "StoreFlag": 1,
          "SMSReportFlag": 0
        },
        "params": {
          "SMSCenter": {
            "brief": "the Center number of the SIM Card."
          },
          "StoreFlag": {
            "brief": "SMS store space",
            "item": {
              "0": "SIM Card",
              "1": "ME"
            }
          },
          "SMSReportFlag": {
            "brief": "SMS report is enable or disable",
            "item": {
              "0": "Disable",
              "1": "Enable"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "061001": "Set SMS settings failed."
      }
    },
    "GetSingleSMS": {
      "brief": "",
      "request": {
        "data": {
          "SMSId": 1
        },
        "params": {
          "SMSId": {
            "brief": "The single SMS id."
          }
        }
      },
      "response": {
        "data": {
          "PhoneNumber": "13713804698",
          "SMSType": 0,
          "SMSContent": "Hello World",
          "SMSId": "3",
          "SMSTime": "2014-01-12 11:06:58"
        },
        "params": {
          "PhoneNumber": {
            "brief": "The SMS phone number"
          },
          "SMSType": {
            "brief": "SMS report is enable or disable",
            "item": {
              "0": "read",
              "1": "unread",
              "2": "sent",
              "3": "sent failed",
              "4": "report",
              "5": "flash",
              "6": "draft"
            }
          },
          "SMSContent": {
            "brief": "The all content of the SMS."
          },
          "SMSId": {
            "brief": "The single SMS id."
          },
          "SMSTime": {
            "brief": "the SMS time.format: YYYY-MM-DDhh:mm:ss"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SMSContent": ""
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "061101": "Get single sms failed."
      }
    },
    "GetSMSList": {
      "brief": "",
      "request": {
        "data": {
          "key": "inbox"
        },
        "Page": 1
      },
      "params": {
        "key": {
          "brief": "SMS list type",
          "item": {
            "inbox": "inbox",
            "send": "send",
            "draft": "draft"
          }
        },
        "Page": {
          "brief": "Pages that SMS list separate,",
          "item": {
            "0": "return all SMS.",
            "1": "the first page ,every page has 10 contacts SMS list."
          }
        }
      },
      "response": {
        "data": {
          "SMSList": [
            {
              "PhoneNumber": "13713804698",
              "SMSType": 0,
              "SMSContent": "Hello World",
              "SMSId": "3",
              "SMSTime": "2014-01-12 11:06:58"
            }
          ],
          "Page": 1,
          "TotalPageCount": 1
        },
        "params": {
          "PhoneNumber": {
            "brief": "Pages that SMS list separate,"
          },
          "SMSType": {
            "brief": "Pages that SMS list separate,",
            "item": {
              "0": "read",
              "1": "unread",
              "2": "sent",
              "3": "sent failed",
              "4": "report",
              "5": "flash",
              "6": "draft"
            }
          },
          "SMSContent": {
            "brief": "The first 40 characters of the SMS."
          },
          "SMSId": {
            "brief": "The SMS id."
          },
          "SMSTime": {
            "brief": "the SMS time.format: YYYY-MM-DDhh:mm:ss"
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "061201": "Get SMS List failed."
      }
    }
  },
  "Statistics": {
    "GetUsageRecord": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "TConnTimes": 0,
            "CurrConnTimes": 0,
            "last_usage": 0,
            "HCurrUseUL": 0,
            "HCurrUseDL": 0,
            "HUseData": 0,
            "RCurrUseUL": 0,
            "RCurrUseDL": 0,
            "RoamUseData": 0,
            "MonthlyPlan": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "070401": "msg"
      }
    },
    "SetUsageRecordClear": {
      "brief": "",
      "request": {
        "data": {
          "clear_time": "2017-11-06 14:03:20"
        },
        "params": {
          "clear_time": {
            "brief": "Current time for clearing usage."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "070201": "Clear all usage records failed."
      }
    },
    "GetUsageSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "BillingDay": 1,
          "MonthlyPlan": 0,
          "UsedData": 0,
          "Unit": 1,
          "TimeLimitFlag": 0,
          "TimeLimitTimes": 5,
          "UsedTimes": 0,
          "AutoDisconnFlag": 0
        },
        "params": {
          "BillingDay": {
            "brief": "Billing day (Min:1, Max:31) "
          },
          "MonthlyPlan": {
            "brief": "The max data that on month could use. If this value =0, this means no limited."
          },
          "UsedData": {
            "brief": "The total roam and home used data in month."
          },
          "Unit": {
            "brief": "The unit function flage",
            "item": {
              "0": "MB",
              "1": "GB",
              "2": "KB"
            }
          },
          "TimeLimitFlag": {
            "brief": "The time limit function flage",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "TimeLimitTimes": {
            "brief": "The time limit function open, must set the limit time."
          },
          "UsedTimes": {
            "brief": "The used time that after open time limit function."
          },
          "AutoDisconnFlag": {
            "brief": "This flage control the disconnection when the usage settings get conditions.",
            "item": {
              "0": "disable, not auto disconnect",
              "1": "enable, auto disconnect"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "BillingDay": 1,
            "MonthlyPlan": 0,
            "UsedData": 0,
            "Unit": 1,
            "TimeLimitFlag": 0,
            "TimeLimitTimes": 5,
            "UsedTimes": 0,
            "AutoDisconnFlag": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "070301": "Get usage settings failed."
      }
    },
    "SetUsageSettings": {
      "brief": "",
      "request": {
        "data": {
          "BillingDay": 1,
          "MonthlyPlan": 0,
          "UsedData": 0,
          "Unit": 1,
          "TimeLimitFlag": 0,
          "TimeLimitTimes": 5,
          "UsedTimes": 0,
          "AutoDisconnFlag": 0
        },
        "params": {
          "BillingDay": {
            "brief": "Billing day (Min:1, Max:31) "
          },
          "MonthlyPlan": {
            "brief": "The max data that on month could use. If this value =0, this means no limited."
          },
          "UsedData": {
            "brief": "The total roam and home used data in month."
          },
          "Unit": {
            "brief": "The unit function flage",
            "item": {
              "0": "MB",
              "1": "GB",
              "2": "KB"
            }
          },
          "TimeLimitFlag": {
            "brief": "The time limit function flage",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "TimeLimitTimes": {
            "brief": "The time limit function open, must set the limit time."
          },
          "UsedTimes": {
            "brief": "The used time that after open time limit function."
          },
          "AutoDisconnFlag": {
            "brief": "This flage control the disconnection when the usage settings get conditions.",
            "item": {
              "0": "disable, not auto disconnect",
              "1": "enable, auto disconnect"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "070401": "Set usage settings failed."
      }
    },
    "GetDevicePushInfo": {
      "brief": "",
      "request": {
        "data": {
          "DeviceToken": "ABCDEF0123456789ABCDEF0123456789ABCDEF0123456789 ABCDEF0123456789"
        },
        "params": {
          "DeviceToken": {
            "brief": "Device token (length is 64, only contain 0-9, a-f, A-F)"
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {},
          "id": "5.4"
        }
      },
      "errorCode": {
        "070501": "Get device push information failed."
      }
    }
  },
  "USSD": {
    "SendUSSD": {
      "brief": "",
      "request": {
        "data": {
          "UssdContent": "*#189",
          "UssdType": 1
        },
        "params": {
          "UssdContent": {
            "brief": "Send USSD content"
          },
          "UssdType": {
            "brief": "",
            "item": {
              "0": "none",
              "1": "done",
              "2": "more",
              "3": "abort",
              "4": "other",
              "5": "NoSUP",
              "6": "timeout",
              "7": "max"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "080101": "Send USSD commandfailed."
      }
    },
    "GetUSSDSendResult": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {
          "SendState": {
            "brief": "SendUSSD State",
            "item": {
              "0": "none",
              "1": "sending",
              "2": "complete"
            }
          },
          "UssdType": {
            "brief": "Send USSD content",
            "item": {
              "0": "none",
              "1": "done",
              "2": "more",
              "3": "abort",
              "4": "other",
              "5": "NoSUP",
              "6": "timeout",
              "7": "max"
            }
          },
          "UssdContent": {
            "brief": "Response USSD content"
          },
          "UssdContentLen": {
            "brief": "Response USSD content length"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SendState": 0,
            "UssdType": 0,
            "UssdContent": "",
            "UssdContentLen": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "080201": "Get send USSD result failed."
      }
    },
    "SetUSSDEnd": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "080301": "Set USSD end failed."
      }
    }
  },
  "Update": {
    "GetDeviceNewVersion": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "State": 0,
          "Version": "Y901_00_._"
        },
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "State": 2,
            "Version": "Y901_00_._"
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "SetFOTAStartDownload": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "GetDeviceUpgradeState": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "Process": 0,
          "Status": 0
        },
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "Process": 0,
            "Status": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "SetDeviceUpdateStop": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "SetCheckNewVersion": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "SetUpdateMode": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "GetManualUpdateProcess": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "GetLastUpdateInfo": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "GetUpdateHistory": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SendState": 0,
          "UssdType": 0,
          "UssdContent": "",
          "UssdContentLen": 0
        },
        "params": {},
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "010101": "error msg"
      }
    }
  },
  "Firewall": {
    "GetMacFilterSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "filter_policy": 1,
          "MacAllowList": [
            "00:1D:0F:10:2D:D5"
          ],
          "MacDenyList": [
            "00:1D:0F:10:2D:D9",
            "00:1D:0F:10:2D:D1"
          ]
        },
        "params": {
          "filter_policy": {
            "brief": "",
            "item": {
              "0": "off",
              "1": "white",
              "2": "black"
            }
          },
          "MacAllowList": {
            "brief": "The Allow Mac address."
          },
          "MacDenyList": {
            "brief": "The Deny Mac address."
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "filter_policy": 0,
            "MacAllowList": [],
            "MacDenyList": []
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "100101": "Get MAC Filter Settingsfailed."
      }
    },
    "SetMacFilterSettings": {
      "brief": "",
      "request": {
        "data": {
          "filter_policy": 0,
          "MacAllowList": [
            "00:1D:0F:10:2D:D5"
          ],
          "MacDenyList": [
            "00:1D:0F:10:2D:D9",
            "00:1D:0F:10:2D:D1"
          ]
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "100201": "Set MAC Filter settingsfailed.",
        "100202": "WPS is on, set failed."
      }
    },
    "getPortFwding": {
      "brief": "",
      "request": {
        "data": {
          "total_num": 1,
          "portfwd_list": [
            {
              "list_id": 1,
              "portfwd_name": "name1",
              "private_ip": "192.168.1.1",
              "private_port": 88,
              "global_port": 90,
              "fwding_protocol": 6,
              "fwding_status": 1
            }
          ]
        },
        "params": {
          "total_num": {
            "brief": "The number of the port forwarding list."
          },
          "portfwd_list": {
            "brief": "The port forwarding list"
          },
          "list_id": {
            "brief": ""
          },
          "portfwd_name": {
            "brief": ""
          },
          "private_ip": {
            "brief": ""
          },
          "global_port": {
            "brief": ""
          },
          "private_port": {
            "brief": ""
          },
          "fwding_protocol": {
            "brief": "",
            "item": {
              "6": "TCP",
              "17": "UDP",
              "253": "TCP&UDP"
            }
          },
          "fwding_status": {
            "brief": "",
            "item": {
              "0": "off",
              "1": "on"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanState": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "100301": "Get port forwarding list failed."
      }
    },
    "addPortFwding": {
      "brief": "",
      "request": {
        "data": {
          "portfwd_name": "name1",
          "private_ip": "192.168.1.1",
          "private_port": 88,
          "global_port": 90,
          "fwding_protocol": 6,
          "fwding_status": 1
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "100401": "Add new port forwarding failed."
      }
    },
    "DeletePortFwding": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "Username"
      }
    },
    "EditPortFwding": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "Username"
      }
    },
    "SetPortFwding": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "Username"
      }
    },
    "getDMZInfo": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "dmz_status": 1,
          "dmz_ip": "192.168.1.60"
        },
        "params": {
          "dmz_status": {
            "brief": "",
            "item": {
              "0": "off",
              "1": "on"
            }
          },
          "dmz_ip": {
            "brief": ""
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanState": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "100801": "Get DMZ Settings failed."
      }
    },
    "setDMZInfo": {
      "brief": "",
      "request": {
        "data": {
          "dmz_status": 1,
          "dmz_ip": "192.168.1.60"
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "100901": "Set DMZ settings failed."
      }
    },
    "getIPFilterList": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "ipFilter_list": [
            {
              "list_id": 0,
              "lan_ip": "192.168.1.15",
              "lan_port": 0,
              "wan_ip": "10.12.23.56",
              "wan_port": 80,
              "ip_protocol": 17,
              "ip_status": 1
            }
          ],
          "ipFilterAllowlist": [
            {
              "list_id": 0,
              "lan_ip": "192.168.1.15",
              "lan_port": 0,
              "wan_ip": "10.12.23.56",
              "wan_port": 80,
              "ip_protocol": 17,
              "ip_status": 1
            }
          ],
          "total_num": 1,
          "filter_policy": 0
        },
        "params": {
          "ipFilter_list": {
            "brief": "ipfilter list(deny)"
          },
          "ipFilterAllowlist": {
            "brief": "ipfilter list(Allow)"
          },
          "list_id": {
            "brief": "record id"
          },
          "lan_ip": {
            "brief": ""
          },
          "lan_port": {
            "brief": ""
          },
          "wan_ip": {
            "brief": ""
          },
          "wan_port": {
            "brief": ""
          },
          "ip_protocol": {
            "brief": "",
            "item": {
              "6": "TCP",
              "17": "UDP",
              "253": "TCP&UDP"
            }
          },
          "ip_status": {
            "brief": ""
          },
          "total_num": {
            "brief": "the count of record"
          },
          "filter_policy": {
            "brief": "",
            "item": {
              "0": "Disable",
              "1": "deny",
              "2": "allow"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanState": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "101001": "Get ip filter list failed."
      }
    },
    "AddIPFilter": {
      "brief": "",
      "request": {
        "data": {
          "wan_ip": "10.12.12.13",
          "lan_port": 0,
          "ip_status": 1,
          "ip_protocol": 6,
          "lan_ip": "192.168.1.188",
          "wan_port": 88,
          "filter_policy": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "101101": "Add new ip filter failed."
      }
    },
    "DeleteIPFilter": {
      "brief": "",
      "request": {
        "data": {
          "list_id": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "101201": "Delete ip filter failed."
      }
    },
    "EditIPFilter": {
      "brief": "",
      "request": {
        "data": {
          "list_id": 0,
          "lan_ip": "192.168.1.1",
          "lan_port": "80",
          "wan_ip": "20.12.12.5",
          "wan_port": "85",
          "ip_protocol": 6,
          "ip_status": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "101301": "Edit ip filter failed."
      }
    },
    "getFirewallSwitch": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "firewall_status": 1,
          "ipflt_status": 1,
          "wan_ping_status": 0,
          "port_forward_status": 1
        },
        "params": {
          "firewall_status": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "ipflt_status": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "wan_ping_status": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "port_forward_status": {
            "brief": "",
            "item": {
              "0": "disable port forwading function",
              "1": "enable port forwading function"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "WlanState": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "101401": "Get Firewall Switch failed."
      }
    },
    "setFirewallSwitch": {
      "brief": "",
      "request": {
        "data": {
          "firewall_status": 1,
          "ipflt_status": 1,
          "wan_ping_status": 0,
          "port_forward_status": 1
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "101501": "Set Firewall Switch failed."
      }
    },
    "SetIPFilter": {
      "brief": "",
      "request": {
        "data": {
          "total_num": 1,
          "filter_policy": 0,
          "ipFilter_list": [
            {
              "list_id": 0,
              "lan_ip": "192.168.1.1",
              "lan_port": 80,
              "wan_ip": "20.12.12.5",
              "wan_port": 85,
              "ip_protocol": 6,
              "ip_status": 0
            }
          ]
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "101601": "Set ip filter failed."
      }
    },
    "GetVPNPassthrough": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "status": 1,
          "vpn_server": "192.168.1.60"
        },
        "params": {
          "status": {
            "brief": "",
            "item": {
              "0": "VPN pass-through off",
              "1": "VPN pass-through on"
            }
          },
          "vpn_server": {
            "brief": ""
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "101701": "Get VPN pass-through Settings failed."
      }
    },
    "SetVPNPassthrough": {
      "brief": "",
      "request": {
        "data": {
          "status": 1,
          "vpn_server": "192.168.1.60"
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "101801": "Set VPN pass-through settings failed."
      }
    },
    "getUrlFilterSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "filter_policy": 0,
          "UrlAllowList": [
            "http://www.baidu.com"
          ],
          "UrlDenyList": [
            "http://www.baidu2.com"
          ]
        },
        "params": {
          "filter_policy": {
            "brief": "",
            "item": {
              "0": "Disable",
              "1": "white",
              "2": "black"
            }
          },
          "UrlAllowList": {
            "brief": "The Allow Url address"
          },
          "UrlDenyList": {
            "brief": "The Deny Url address."
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "101901": "Get URL Filter Settings failed."
      }
    },
    "setUrlFilterSettings": {
      "brief": "",
      "request": {
        "data": {
          "filter_policy": 0,
          "UrlAllowList": [
            "http://www.baidu.com"
          ],
          "UrlDenyList": [
            "http://www.baidu2.com"
          ]
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "102001": "Set URL Filter settings failed."
      }
    }
  },
  "Lan": {
    "GetLanSettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "IPv4IPAddress": "192.168.1.1",
          "SubnetMask": "255.255.255.0",
          "DHCPServerStatus": 1,
          "StartIPAddress": "192.168.1.100",
          "EndIPAddress": "192.168.1.200",
          "DHCPLeaseTime": 12,
          "MacAddress": "3c:cb:7c:48:1d:0f",
          "DHCPLeaseTimeType": 0,
          "VPNPassthrough": 0,
          "DNSMode": 0,
          "DNSAddress1": "",
          "DNSAddress2": ""
        },
        "params": {
          "IPv4IPAddress": {
            "brief": "IPv4 IP address, Gateway"
          },
          "SubnetMask": {
            "brief": "Subnet Mask"
          },
          "DHCPServerStatus": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "StartIPAddress": {
            "brief": "Start IP Address"
          },
          "EndIPAddress": {
            "brief": "End IP Address"
          },
          "DHCPLeaseTime": {
            "brief": "DHCP Lease Time (hours):1,6,12,24"
          },
          "MacAddress": {
            "brief": "The LAN MAC Address"
          },
          "DHCPLeaseTimeType": {
            "brief": "DHCPLeaseTimeType",
            "item": {
              "0": "分钟",
              "1": "小时"
            }
          },
          "VPNPassthrough": {
            "brief": "(option)VPNPassthrough status",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "DNSMode": {
            "brief": "DNS mode",
            "item": {
              "0": "off",
              "1": "on"
            }
          },
          "DNSAddress1": {
            "brief": ""
          },
          "DNSAddress2": {
            "brief": ""
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "IPv4IPAddress": "192.168.1.1",
            "SubnetMask": "255.255.255.0",
            "DHCPServerStatus": 1,
            "StartIPAddress": "192.168.1.100",
            "EndIPAddress": "192.168.1.200",
            "DHCPLeaseTime": 12,
            "MacAddress": "3c:cb:7c:48:1d:0f"
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "110101": "Get LAN Settings failed."
      }
    },
    "SetLanSettings": {
      "brief": "",
      "request": {
        "data": {
          "IPv4IPAddress": "192.168.1.1",
          "SubnetMask": "255.255.255.0",
          "DHCPServerStatus": 1,
          "StartIPAddress": "192.168.1.100",
          "EndIPAddress": "192.168.1.200",
          "DHCPLeaseTime": 12,
          "MacAddress": "3c:cb:7c:48:1d:0f",
          "DHCPLeaseTimeType": 0,
          "VPNPassthrough": 0,
          "DNSMode": 0,
          "DNSAddress1": "",
          "DNSAddress2": ""
        }
      },
      "response": {
        "result": {}
      },
      "errorCode": {
        "110201": "Set LAN settings failed."
      }
    }
  },
  "ConnectionDevices": {
    "GetConnectedDeviceList": {
      "brief": "",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "ConnectedList": [
            {
              "id": 1,
              "DeviceName": "D1-Jinhui-Lu",
              "MacAddress": "a2:b0:4c:3b:73:98",
              "IPAddress": "192.168.1.167",
              "AssociationTime": 0,
              "DeviceType": 1,
              "ConnectMode": 0
            }
          ]
        },
        "params": {
          "ConnectedList": {
            "brief": ""
          },
          "id": {
            "brief": "The list element only flag."
          },
          "DeviceName": {
            "brief": "The connected device name"
          },
          "MacAddress": {
            "brief": "The connected device MAC address."
          },
          "IPAddress": {
            "brief": "The connected device IP address."
          },
          "AssociationTime": {
            "brief": "(Option) The device connected times. (s)"
          },
          "DeviceType": {
            "brief": "",
            "item": {
              "0": "use the web UI and login device;",
              "1": "just connected to device but not login."
            }
          },
          "ConnectMode": {
            "brief": "",
            "item": {
              "0": "USB connect",
              "1": "WIFI connect"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "ConnectedList": [
              {
                "id": 1,
                "DeviceName": "D1-Jinhui-Lu",
                "MacAddress": "5a:5f:0c:2d:69:5f",
                "IPAddress": "192.168.1.164",
                "AssociationTime": 0,
                "DeviceType": 0,
                "ConnectMode": 0
              }
            ]
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "120101": "Get Connected device list failed."
      }
    },
    "GetBlockDeviceList": {
      "brief": "",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "BlockList": [
            {
              "id": 0,
              "DeviceName": "d1-orange-link",
              "MacAddress": "98:FC:D2:99:EF",
              "IPAddress": "192.168.1.100",
              "AssociationTime": 100,
              "DeviceType": 1,
              "ConnectMode": 0
            }
          ]
        },
        "params": {
          "BlockList": {
            "brief": ""
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "BlockList": []
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "120201": "Get block device list failed"
      }
    },
    "SetConnectedDeviceBlock": {
      "brief": "",
      "request": {
        "data": {
          "DeviceName": "d1-orange-link",
          "MacAddress": "98:FC:D2:99:EF"
        },
        "params": {
          "DeviceName": {
            "brief": "The connected device name"
          },
          "MacAddress": {
            "brief": "The connected device MAC address."
          }
        }
      },
      "response": {
        "data": {},
        "result": {}
      },
      "errorCode": {
        "120301": "Set device block  failed.",
        "120302": "Device id it not exist."
      }
    },
    "SetDeviceUnlock": {
      "brief": "",
      "request": {
        "data": {
          "DeviceName": "d1-orange-link",
          "MacAddress": "98:FC:D2:99:EF"
        },
        "params": {
          "DeviceName": {
            "brief": "The connected device name"
          },
          "MacAddress": {
            "brief": "The connected device MAC address."
          }
        }
      },
      "response": {
        "data": {},
        "result": {}
      },
      "errorCode": {
        "120401": "Set device unblock failed.",
        "120402": "Unblock device is not exist."
      }
    },
    "SetDeviceName": {
      "brief": "",
      "request": {
        "data": {
          "DeviceName": "d1-orange-link",
          "MacAddress": "98:FC:D2:99:EF",
          "DeviceType": 1,
          "ConectedType": 1
        },
        "params": {
          "DeviceName": {
            "brief": "The connected device name"
          },
          "MacAddress": {
            "brief": "The connected device MAC address."
          },
          "DeviceType": {
            "brief": "",
            "item": {
              "0": "Block device",
              "1": "connected device"
            }
          },
          "ConnectMode": {
            "brief": "",
            "item": {
              "0": "connected to main ssid",
              "1": "connected to guest ssid "
            }
          }
        }
      },
      "response": {
        "data": {},
        "result": {}
      },
      "errorCode": {
        "120501": "Set device name failed."
      }
    }
  },
  "System": {
    "GetSystemInfo": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SwVersion": "Y901_F2_05.00_04",
          "HwVersion": "V3.0",
          "MacAddress": "3c:cb:7c:48:1d:0f",
          "WebUiVersion": "Y901_JRDRESOURCE_F2_04_3706",
          "DeviceName": "Y901",
          "IMEI": "355640060140666",
          "HttpApiVersion": "1.1"
        },
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SwVersion": "Y901_F2_05.00_04",
            "HwVersion": "V3.0",
            "WebUiVersion": "Y901_JRDRESOURCE_F2_04_3706",
            "DeviceName": "Y901",
            "IMEI": "355640060140666",
            "HttpApiVersion": "1.1",
            "MacAddress": "3c:cb:7c:48:1d:0f"
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "130101": "Get some or all sub-items failed."
      }
    },
    "SetLanguage": {
      "brief": "",
      "request": {
        "data": {
          "Language": "en"
        },
        "params": {
          "Language": {
            "brief": "en,fr,jp..."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "130201": "Set current language setting fail."
      }
    },
    "GetCurrentLanguage": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "Language": "en"
        },
        "params": {
          "Language": {
            "brief": "Language ID��en,fr,jp..."
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "Language": "en"
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "130301": "Get current language setting fail."
      }
    },
    "GetSystemStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SignalStrength": -1,
          "NetworkType": -1,
          "Roaming": 255,
          "NetworkName": "N/A",
          "WlanState": 0,
          "ConnectionStatus": 0,
          "SmsState": 0,
          "chg_state": 1,
          "bat_level": 4,
          "bat_cap": 100,
          "curr_num": 0,
          "TotalConnNum": 1
        },
        "params": {
          "SignalStrength": {
            "brief": "RSSI value",
            "item": {
              "0": "level 0",
              "1": "level 1",
              "2": "level 2",
              "3": "level 3",
              "4": "level 4",
              "-1": "No service"
            }
          },
          "NetworkType": {
            "brief": "Network Type",
            "item": {
              "0": "NO SERVER",
              "1": "GPRS",
              "2": "EDGE",
              "3": "HSPA",
              "4": "HSUPA",
              "5": "UMTS",
              "6": "HSPA+",
              "7": "DC-HSPA+",
              "8": "LTE",
              "9": "LTE+",
              "10": "WCDMA",
              "11": "CDMA",
              "12": "GSM"
            }
          },
          "Roaming": {
            "brief": "",
            "item": {
              "0": "Roaming",
              "1": "no"
            }
          },
          "NetworkName": {
            "brief": "operator name"
          },
          "WlanState": {
            "brief": "Wlan status",
            "item": {
              "0": "off",
              "1": "on",
              "2": "WPS"
            }
          },
          "ConnectionStatus": {
            "brief": "",
            "item": {
              "0": "disconnected",
              "1": "connecting",
              "2": "connected",
              "3": "disconnecting"
            }
          },
          "SmsState": {
            "brief": "",
            "item": {
              "0": "no SMS",
              "1": "SMS full",
              "2": "Noral",
              "3": "New SMS"
            }
          },
          "chg_state": {
            "brief": "",
            "item": {
              "0": "Charging",
              "1": "Charge done",
              "2": "Charge remove",
              "3": "error occur",
              "4": "Charging out for Power Bank"
            }
          },
          "bat_level": {
            "brief": "Current battery capacity",
            "item": {
              "0": "Grade 0",
              "1": "Grade 1",
              "2": "Grade 2",
              "3": "Grade 3",
              "4": "Grade 4",
              "5": "low volt"
            }
          },
          "curr_num": {
            "brief": ""
          },
          "TotalConnNum": {
            "brief": ""
          },
          "bat_cap": {
            "brief": "Current battery capacity(0~100)"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SignalStrength": 4,
            "NetworkType": 8,
            "Roaming": 1,
            "NetworkName": "UNICOM",
            "ConnectionStatus": 0,
            "SmsState": 3,
            "chg_state": 1,
            "bat_level": 4,
            "bat_cap": 100,
            "WlanState": 0,
            "curr_num": 0,
            "TotalConnNum": 1
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "130401": "Get system Status fail."
      }
    },
    "SetDeviceReboot": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "130501": "Set device reboot failed."
      }
    },
    "SetDeviceBackup": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "130701": "Set device back up failed."
      }
    },
    "SetDeviceRestore": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "130801": "Set device restore failed."
      }
    },
    "SetDevicePowerOff": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "SetAppBackup": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    },
    "SetAppRestoreBackup": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "010101": "error msg"
      }
    }
  },
  "Sharing": {
    "GetDLNASettings": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "DlnaStatus": 0,
          "DlnaName": "Y901"
        },
        "params": {
          "DlnaStatus": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "DlnaName": {
            "brief": "The device name"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "DlnaStatus": 0,
            "DlnaName": "Y901"
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "140101": "Get DLNA Settings failed."
      }
    },
    "SetDLNASettings": {
      "brief": "",
      "request": {
        "data": {
          "DlnaStatus": 0,
          "DlnaName": "Y901"
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "140201": "Set DLNA Settings failed."
      }
    },
    "GetSambaStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SambaStatus": 0
        },
        "params": {
          "SambaStatus": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SambaStatus": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "140301": "Get Samba Settings failed."
      }
    },
    "SetSambaStatus": {
      "brief": "",
      "request": {
        "data": {
          "SambaStatus": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "140401": "Set Samba Settings failed."
      }
    },
    "GetFtpStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "FtpStatus": 0
        },
        "params": {
          "FtpStatus": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "FtpStatus": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "140501": "Get Ftp Settings failed."
      }
    },
    "SetFtpStatus": {
      "brief": "",
      "request": {
        "data": {
          "FtpStatus": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "140601": "Set Ftp Settings failed."
      }
    },
    "GetSDCardSpace": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "TotalSpace": "0.04",
          "UsedSpace": "0.03"
        },
        "params": {
          "TotalSpace": {
            "brief": "The unit is (GB)"
          },
          "UsedSpace": {
            "brief": "The unit is (GB)"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "TotalSpace": "0.04",
            "UsedSpace": "0.03"
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "140701": "Get SD Card Space failed."
      }
    },
    "GetSDFileList": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "FileList": [
            {
              "FileName": "",
              "FileType": 1,
              "CreateTime": "2014-01-12",
              "Size": 55545
            }
          ],
          "Page": 0,
          "TotalPage": 0,
          "Path": ""
        },
        "params": {
          "FileList": {
            "brief": ""
          },
          "Page": {
            "brief": "Every page have 20 files, web UI get the files one page by one page;"
          },
          "TotalPage": {
            "brief": "The total page that under the path."
          },
          "Path": {
            "brief": "The path of the SD files."
          },
          "FileName": {
            "brief": "The name of the files that under the current path."
          },
          "FileType": {
            "brief": "",
            "item": {
              "0": "file",
              "1": "folder"
            }
          },
          "CreateTime": {
            "brief": "The time to create the file or folder"
          },
          "Size": {
            "brief": "The size of the file, the folder��size is 0.The unit is KB."
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "FileList": [],
            "Page": 0,
            "TotalPage": 0,
            "Path": ""
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "140801": "Set SD Card settings failed."
      }
    },
    "GetSDcardStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SDcardStatus": 0
        },
        "params": {
          "SDcardStatus": {
            "brief": "",
            "item": {
              "0": "no Sdcard device",
              "1": "Sdcard device"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SDcardStatus": 0
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "140901": "Get SD Card status failed."
      }
    },
    "GetUsbcardStatus": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "UsbcardStatus": 1
        },
        "params": {
          "UsbcardStatus": {
            "brief": "",
            "item": {
              "0": "disable",
              "1": "enable"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "UsbcardStatus": 1
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "141001": "Get Usbcard Settings failed."
      }
    },
    "SetUsbcardStatus": {
      "brief": "",
      "request": {
        "data": {
          "UsbcardStatus": 1
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "141101": "Set Usbcard Settings failed."
      }
    }
  },
  "Profile": {
    "GetProfileList": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "ProfileList": [
            {
              "ProfileID": 1,
              "ProfileName": "China Unicom",
              "APN": "3GNET",
              "Password": "",
              "AuthType": -1,
              "DailNumber": "*99#",
              "UserName": "",
              "Default": 1,
              "IsPredefine": 0,
              "IPAdrress": "",
              "PdpType": -1
            }
          ],
          "data_len": 1
        },
        "params": {
          "ProfileList": {
            "brief": ""
          },
          "ProfileID": {
            "brief": ""
          },
          "ProfileName": {
            "brief": "Profile name"
          },
          "APN": {
            "brief": "APN name"
          },
          "UserName": {
            "brief": "User name"
          },
          "Password": {
            "brief": "password"
          },
          "AuthType": {
            "brief": "Auth type",
            "item": {
              "0": "None",
              "1": "PAP",
              "2": "CHAP",
              "3": "PAP& CHAP"
            }
          },
          "DailNumber": {
            "brief": "Dail number"
          },
          "Default": {
            "brief": "Current Default profile",
            "item": {
              "0": "not Default",
              "1": "Default"
            }
          },
          "IsPredefine": {
            "brief": "Is predefine or user create profile",
            "item": {
              "0": "Predefine profile",
              "1": "User Createprofile"
            }
          },
          "IPAdrress": {
            "brief": "If empty the dynamic IP, else static IP."
          },
          "PdpType": {
            "brief": "",
            "item": {
              "0": "IPV4",
              "1": "IPV6",
              "2": "IPV4V6"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "ProfileList": [
              {
                "ProfileID": 16,
                "ProfileName": "China Unicom",
                "APN": "3GNET",
                "Password": "",
                "AuthType": 0,
                "DailNumber": "*99#",
                "UserName": "",
                "Default": 1,
                "IsPredefine": 0
              },
              {
                "ProfileID": 2,
                "ProfileName": "China Unicom",
                "APN": "3gnet",
                "Password": "1234",
                "AuthType": 0,
                "DailNumber": "*99#",
                "UserName": "china",
                "Default": 0,
                "IsPredefine": 1
              }
            ],
            "data_len": 2,
            "state": 1
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "150101": "Get profile listfailed."
      }
    },
    "AddNewProfile": {
      "brief": "",
      "request": {
        "data": {
          "ProfileName": "China Unicom",
          "APN": "3gnet",
          "UserName": "china",
          "Password": "1234",
          "AuthType": 0,
          "DailNumber": "*99#",
          "IPAdrress": "",
          "PdpType": 1
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "150201": "Add newprofile failed."
      }
    },
    "EditProfile": {
      "brief": "",
      "request": {
        "data": {
          "ProfileID": 1,
          "ProfileName": "China Unicom",
          "APN": "3gnet",
          "UserName": "china",
          "Password": "1234",
          "AuthType": 0,
          "DailNumber": "*99#",
          "IPAdrress": "",
          "PdpType": 1
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "150301": "Edit profile failed.",
        "150302": "Profile is not exit."
      }
    },
    "DeleteProfile": {
      "brief": "",
      "request": {
        "data": {
          "ProfileID": 1
        },
        "params": {
          "ProfileID": {
            "brief": "Profile id must in the profile list."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "150401": "Delete profile failed.",
        "150402": "Profile is not exist."
      }
    },
    "SetDefaultProfile": {
      "brief": "",
      "request": {
        "data": {
          "ProfileID": 1
        },
        "params": {
          "ProfileID": {
            "brief": "Profile id must in the profile list."
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "150501": "Set default profile failed.",
        "150502": "Profile is not exist."
      }
    }
  },
  "TR069": {
    "GetClientConfiguration": {
      "brief": "",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "AcsUrl": "",
          "AcsUserName": "",
          "AcsUserPassword": "",
          "ConReqAuthent": 1,
          "ConReqUserName": "",
          "ConReqUserPassword": "",
          "Inform": 1,
          "InformInterval": 60,
          "State": 0
        },
        "params": {
          "AcsUrl": {
            "brief": "Acs Url"
          },
          "AcsUserName": {
            "brief": "Acs User Name"
          },
          "AcsUserPassword": {
            "brief": "Acs User Password"
          },
          "ConReqAuthent": {
            "brief": "",
            "item": {
              "0": "Disable",
              "1": "Enable"
            }
          },
          "ConReqUserName": {
            "brief": "Connection Request User Name"
          },
          "ConReqUserPassword": {
            "brief": "Connection Request User Password"
          },
          "Inform": {
            "brief": "",
            "item": {
              "0": "Disable",
              "1": "Enable"
            }
          },
          "InformInterval": {
            "brief": "Inform Interval(s)"
          },
          "State": {
            "brief": ""
          }
        },
        "result": {
          "error": "The API does not support"
        }
      },
      "errorCode": {
        "190101": "Get client configuration failed."
      }
    },
    "SetClientConfiguration": {
      "brief": "",
      "request": {
        "data": {
          "AcsUrl": "",
          "AcsUserName": "",
          "AcsUserPassword": "",
          "ConReqAuthent": 1,
          "ConReqUserName": "",
          "ConReqUserPassword": "",
          "Inform": 1,
          "InformInterval": 60,
          "State": 0
        },
        "params": {}
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "190201": "Set client configuration failed."
      }
    }
  },
  "PowerManagement": {
    "GetBatteryState": {
      "brief": "",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "chg_state": 0,
          "BatteryLevel": 50
        },
        "params": {
          "chg_state": {
            "brief": "",
            "item": {
              "0": "Charging",
              "1": "Charge done",
              "2": "Charge remove",
              "3": "error occur",
              "4": "Charging out for Power Bank"
            }
          },
          "BatteryLevel": {
            "brief": "BatteryLevel  (Min: 1 Max:100)"
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "chg_state": 1,
            "BatteryLevel": 100
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "160101": "Get battery state failed."
      }
    },
    "GetPowerSavingMode": {
      "brief": "Note: If only support smart mode, the optional paramers are not required.",
      "request": {
        "data": {},
        "params": {}
      },
      "response": {
        "data": {
          "SmartMode": 0,
          "WiFiMode": 1
        },
        "params": {
          "SmartMode": {
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "WiFiMode": {
            "item": {
              "0": "disable",
              "1": "enable"
            }
          }
        },
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "SmartMode": 1,
            "WiFiMode": 1
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "160201": "Get power saving mode failed."
      }
    },
    "SetPowerSavingMode": {
      "brief": "",
      "request": {
        "data": {
          "SmartMode": 0,
          "WiFiMode": 1
        },
        "params": {
          "SmartMode": {
            "item": {
              "0": "disable",
              "1": "enable"
            }
          },
          "WiFiMode": {
            "item": {
              "0": "disable",
              "1": "enable"
            }
          }
        }
      },
      "response": {
        "data": {},
        "params": {},
        "result": {}
      },
      "errorCode": {
        "160301": "Set power saving mode failed."
      }
    }
  },
  "FeatureGuide": {
    "GetFeatureList": {
      "brief": "Getting the Firmware supported APIs list.",
      "request": {
        "data": {}
      },
      "response": {
        "data": {
          "DeviceName": "Y901",
          "HttpApiVersion": "1.0",
          "Features": {
            "User": [
              "Login",
              "Logout",
              "GetLoginState",
              "ChangePassword",
              "HeartBeat",
              "ForceLogin"
            ],
            "SIM": [
              "GetSimStatus",
              "UnlockPin",
              "UnlockPuk",
              "ChangePinCode",
              "ChangePinState",
              "GetAutoValidatePinState",
              "SetAutoValidatePinState",
              "UnlockSimlock",
              "ActiveSimlock",
              "EraseSimlock"
            ],
            "Connection": [
              "GetConnectionState",
              "Connect",
              "DisConnect",
              "GetConnectionSettings",
              "SetConnectionSettings"
            ],
            "Network": [
              "GetNetworkInfo",
              "SearchNetwork",
              "SearchNetworkResult",
              "RegisterNetwork",
              "GetNetworkRegisterState",
              "GetNetworkSettings",
              "SetNetworkSettings"
            ],
            "Wlan": [
              "GetWlanState",
              "SetWlanOff",
              "SetWlanOn",
              "GetWlanSettings",
              "SetWlanSettings",
              "SetWPSPin",
              "SetWPSPbc",
              "GetWlanSupportMode"
            ],
            "SMS": [
              "GetSMSInitStatus",
              "GetSMSContactList",
              "GetSMSContentList",
              "GetSMSStorageState",
              "DeleteSMS",
              "SendSMS",
              "GetSendSMSResult",
              "SaveSMS",
              "GetSMSSettings",
              "SetSMSSettings",
              "GetSingleSMS"
            ],
            "Statistics": [
              "GetUsageRecord",
              "SetUsageRecordClear",
              "GetUsageSettings",
              "SetUsageSettings",
              "GetDevicePushInfo",
              "SetDevicePushInfo",
              "DeleteDevicePushInfo"
            ],
            "USSD": [
              "SendUSSD",
              "GetUSSDSendResult",
              "SetUSSDEnd"
            ],
            "Update": [
              "GetDeviceNewVersion",
              "SetDeviceStartUpdate",
              "GetDeviceUpgradeState",
              "SetDeviceUpdateStop"
            ],
            "Firewall": [
              "GetMacFilterSettings",
              "SetMacFilterSettings"
            ],
            "LAN": [
              "GetLanSettings",
              "SetLanSettings"
            ],
            "ConnectionDevices": [
              "GetConnectedDeviceList",
              "GetBlockDeviceList",
              "SetConnectedDeviceBlock",
              "SetDeviceUnlock",
              "SetDeviceName"
            ],
            "System": [
              "GetSystemInfo",
              "SetLanguage",
              "GetCurrentLanguage",
              "GetSystemStatus",
              "SetDeviceReboot",
              "SetDeviceReset",
              "SetDeviceBackup",
              "SetDeviceRestore",
              "SetDevicePowerOff"
            ],
            "Profile": [
              "GetProfileList",
              "AddNewProfile",
              "EditProfile",
              "DeleteProfile",
              "SetDefaultProfile"
            ],
            "PowerManagement": [
              "GetBatteryState",
              "GetPowerSavingMode",
              "SetPowerSavingMode"
            ]
          }
        },
        "params": {},
        "result": {
          "jsonrpc": "2.0",
          "result": {
            "DeviceName": "Y901",
            "HttpApiVersion": "1.0",
            "Features": {
              "User": [
                "Login",
                "Logout",
                "GetLoginState",
                "ChangePassword",
                "HeartBeat",
                "ForceLogin"
              ],
              "SIM": [
                "GetSimStatus",
                "UnlockPin",
                "UnlockPuk",
                "ChangePinCode",
                "ChangePinState",
                "GetAutoValidatePinState",
                "SetAutoValidatePinState",
                "UnlockSimlock",
                "ActiveSimlock",
                "EraseSimlock"
              ],
              "Connection": [
                "GetConnectionState",
                "Connect",
                "DisConnect",
                "GetConnectionSettings",
                "SetConnectionSettings"
              ],
              "Network": [
                "GetNetworkInfo",
                "SearchNetwork",
                "SearchNetworkResult",
                "RegisterNetwork",
                "GetNetworkRegisterState",
                "GetNetworkSettings",
                "SetNetworkSettings"
              ],
              "Wlan": [
                "GetWlanState",
                "SetWlanOff",
                "SetWlanOn",
                "GetWlanSettings",
                "SetWlanSettings",
                "SetWPSPin",
                "SetWPSPbc",
                "GetWlanSupportMode"
              ],
              "SMS": [
                "GetSMSInitStatus",
                "GetSMSContactList",
                "GetSMSContentList",
                "GetSMSStorageState",
                "DeleteSMS",
                "SendSMS",
                "GetSendSMSResult",
                "SaveSMS",
                "GetSMSSettings",
                "SetSMSSettings",
                "GetSingleSMS"
              ],
              "Statistics": [
                "GetUsageRecord",
                "SetUsageRecordClear",
                "GetUsageSettings",
                "SetUsageSettings",
                "GetDevicePushInfo",
                "SetDevicePushInfo",
                "DeleteDevicePushInfo"
              ],
              "USSD": [
                "SendUSSD",
                "GetUSSDSendResult",
                "SetUSSDEnd"
              ],
              "Update": [
                "GetDeviceNewVersion",
                "SetDeviceStartUpdate",
                "GetDeviceUpgradeState",
                "SetDeviceUpdateStop"
              ],
              "Firewall": [
                "GetMacFilterSettings",
                "SetMacFilterSettings"
              ],
              "LAN": [
                "GetLanSettings",
                "SetLanSettings"
              ],
              "ConnectionDevices": [
                "GetConnectedDeviceList",
                "GetBlockDeviceList",
                "SetConnectedDeviceBlock",
                "SetDeviceUnlock",
                "SetDeviceName"
              ],
              "System": [
                "GetSystemInfo",
                "SetLanguage",
                "GetCurrentLanguage",
                "GetSystemStatus",
                "SetDeviceReboot",
                "SetDeviceReset",
                "SetDeviceBackup",
                "SetDeviceRestore",
                "SetDevicePowerOff"
              ],
              "Profile": [
                "GetProfileList",
                "AddNewProfile",
                "EditProfile",
                "DeleteProfile",
                "SetDefaultProfile"
              ],
              "PowerManagement": [
                "GetBatteryState",
                "GetPowerSavingMode",
                "SetPowerSavingMode"
              ]
            }
          },
          "id": "5.4"
        }
      },
      "errorCode": {
        "180101": "Get feature listfailed."
      }
    }
  }
}