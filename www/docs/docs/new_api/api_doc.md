# API Document

> 适用于MW70、MW120等新项目 

## 1. Change History

- `2018 03-14` `jinhui.lu` Create document

## 2. Error Code

## 3. Basic Part API

### 3.1 User
#### 3.1.1 Login
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "Login",
  "params": {
    "UserName": "admin",
    "Password": "admin"
  },
  "id": "1.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {"token":"0xasdfase0ad2654879add"},
  "id": "1.1"
}
```

**Params:**

- `UserName`: Login UserName
- `Password`: Login Password

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010101",
    "message": "Username or Password is not correct."
  },
  "id": "1.1"
}
```
- 010101: Username or Password is not correct.
- 010102: Other user is login.
- 010103: If the user login error 5 times, this user can login until the device reboot.
- 010104: If disable guest ap ui access, guest ap can’t access webui.

*****************************************************************************
#### 3.1.2 Logout
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "Logout",
  "params": {},
  "id": "1.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "1.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010201",
    "message": "Logout failed."
  },
  "id": "1.2"
}
```
- 010201: Logout failed.

*****************************************************************************
#### 3.1.3 GetLoginState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetLoginState",
  "params": {},
  "id": "1.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "State": 0,
    "LoginRemainingTimes": 3,
    "LockedRemainingTime": 0
  },
  "id": "1.3"
}
```

**Params:**

- `State`: Login state
  - 0: logout
  - 1: login
  - 2: the login times used out.
- `LoginRemainingTimes`: Login Remaining Times
- `LockedRemainingTime`: Remaining time, unit(second)

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010301",
    "message": "Get login state failed."
  },
  "id": "1.3"
}
```
- 010301: Get login state failed.

*****************************************************************************
#### 3.1.4 ChangePassword
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "ChangePassword",
  "params": {
    "UserName": "admin",
    "CurrPassword": "admin",
    "NewPassword": "admin"
  },
  "id": "1.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "1.4"
}
```

**Params:**

- `UserName`: Current admin
- `CurrPassword`: Current password
- `NewPassword`: The new password

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010401",
    "message": "Username or Password is not correct."
  },
  "id": "1.4"
}
```
- 010401: Change password failed.
- 010402: The current password is wrong.
- 010403: The current password is the same as default password.

*****************************************************************************
#### 3.1.5 HeartBeat
> The web server check if the client is living when the client login. If web server can’t receive this method, web server will logout this client.

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "HeartBeat",
  "params": {},
  "id": "1.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "1.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010501",
    "message": "This method is wrong."
  },
  "id": "1.5"
}
```
- 010501: This method is wrong.

*****************************************************************************
#### 3.1.6 ~~ForceLogin~~
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "ForceLogin",
  "params": {
    "UserName": "admin",
    "Password": "admin"
  },
  "id": "1.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "1.6"
}
```

**Params:**

- `UserName`: The login user name. The default value is admin.
- `Password`: The login user name. The default value is admin.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010601",
    "message": "Username or Password is not correct."
  },
  "id": "1.6"
}
```
- 010601: Username or Password is not correct.
- 010602: Login times is used out. If the user login error 5 times, this user can login until the device reboot.

****************************************************************
#### 3.1.7 SetPasswordChangeFlag
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetPasswordChangeFlag",
  "params": {},
  "id": "1.7"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "change_flag": 1
  },
  "id": "1.7"
}
```

**Params:**

- `change_flag`:
  - 0: Enable means need popup warning user to change default password
  - 1: Disable means no popup warning 

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010701",
    "message": "set Password Change Flag fail. "
  },
  "id": "1.7"
}
```

****************************************************************
#### 3.1.8 GetPasswordChangeFlag
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetPasswordChangeFlag",
  "params": {},
  "id": "1.8"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "change_flag": 1
  },
  "id": "1.8"
}
```

**Params:**

- `change_flag`:
  - 0: Enable means need popup warning user to change default password
  - 1: Disable means no popup warning 

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "010801",
    "message": "get Password Change Flag fail. "
  },
  "id": "1.8"
}
```

*****************************************************************************
### 3.2 SIM
#### 3.2.1 GetSimStatus
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetSimStatus",
  "params": {},
  "id": "2.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SIMState": 7,
    "PinState": 3,
    "PinRemainingTimes": 3,
    "PukRemainingTimes": 3,
    "SIMLockState": -1,
    "SIMLockRemainingTimes": 0,
    "PLMN":"46001",
    "SPN":""
  },
  "id": "2.1"
}
```

**Params:**

- `SIMState`:
  - 0: SIM card absence
  - 1: SIM Card detected;
  - 2: PIN Required;
  - 3: PUK Required;
  - 4: SIM Lock required;
  - 5: PUK times used out;
  - 6:  SIM card illegal;
  - 7:  SIM card ready;
  - 11: SIM card is initing;
- `PinState`:
  - 0: unknown
  - 1: enable but not verified
  - 2: PIN enable verified
  - 3: PIN disable
  - 4: PUK required
  - 5: PUK times used out;
- `PinRemainingTimes`: Pin remaining times
- `PukRemainingTimes`: Puk remaining times
- `SIMLockState`:
  - -1: no simlock/sim lock unlock
  - 0: nck
  - 1: nsck
  - 2: spck
  - 3: cck
  - 4: pck
  - 15,16,17,18,19:rck
  - 30: rck forbid
- `SIMLockRemainingTimes`: SIMLockremaining times
- `PLMN`: Public Land Mobile Network (SimCard)
- `SPN`:  Service Provider name

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020101",
    "message": "Get SIM status failed."
  },
  "id": "2.1"
}
```
- 020101: Get SIM status failed.
- Error code not add.

****************************************************************
#### 3.2.2 UnlockPin
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "UnlockPin",
  "params": {
    "Pin": "1234"
  },
  "id": "2.2"
}
```

**Params:**

- `Pin`: Current PIN Code

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "2.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020201",
    "message": "Invalid Pin"
  },
  "id": "2.2"
}
```
- 020201: Invalid Pin
- Error code not add.

****************************************************************
#### 3.2.3 UnlockPuk
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "UnlockPuk",
  "params": {
    "Puk": "12345678",
    "Pin": "1234"
  },
  "id": "2.3"
}
```

**Params:**

- `Puk`: SIM Card PUK code
- `Pin`: New PIN Code

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "2.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020301",
    "message": "Invalid PUK."
  },
  "id": "2.3"
}
```
- 020301: Verify PUK code failed.
- Error code not add.

****************************************************************
#### 3.2.4 ChangePinCode
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "ChangePinCode",
  "params": {
    "NewPin": "1234",
    "CurrentPin": "1111"
  },
  "id": "2.4"
}
```

**Params:**

- `NewPin`: New PIN Code
- `CurrentPin`: Current PIN Code

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "2.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020401",
    "message": "Change PIN failed."
  },
  "id": "2.4"
}
```
- Error code not add.

****************************************************************
#### 3.2.5 ChangePinState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "ChangePinState",
  "params": {
    "Pin": "1234",
    "State": 1
  },
  "id": "2.5"
}
```

**Params:**

- `State`: Current PIN State
  - 0: Disabled PIN
  - 1: Enabled PIN
- `Pin`: Current PIN Code

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "2.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020501",
    "message": "Change Pin state failed."
  },
  "id": "2.5"
}
```
- Error code not add.

****************************************************************
#### 3.2.6 GetAutoValidatePinState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetAutoValidatePinState",
  "params": {},
  "id": "2.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "State": 1
  },
  "id": "2.6"
}
```

**Params:**

- `State`:
  - 0: Disable
  - 1: Enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020601",
    "message": "Get auto pin State failed."
  },
  "id": "2.6"
}
```
- 020601: Get auto pin State failed.
- Error code not add.

****************************************************************
#### 3.2.7 SetAutoValidatePinState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "SetAutoValidatePinState",
  "params": {
    "Pin": "1234",
    "State": 1
  },
  "id": "2.7"
}
```

**Params:**

- `State`: Current Auto PIN State
  - 0: Disabled
  - 1: Enabled
- `Pin`: Current PIN Code

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "2.7"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020701",
    "message": "Set auto pin State failed."
  },
  "id": "2.7"
}
```
- Error code not add.

****************************************************************
#### 3.2.8 UnlockSimlock
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "UnlockSimlock",
  "params": {
    "SIMLockState": 1,
    "SIMLockCode": "01234561215"
  },
  "id": "2.8"
}
```

**Params:**

- `SIMLockState`:
  - 0: nck
  - 1: nsck
  - 2: spck
  - 3: cck
  - 4: pck
  - 15,16,17,18,19: rck
- `SIMLockCode`: sim lock code

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "2.8"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "020801",
    "message": "Unlock SIM lock failed."
  },
  "id": "2.8"
}
```
- Error code not add.

*********************************************************************************
### 3.3 Connection
#### 3.3.1 GetConnectionState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetConnectionState",
  "params": {},
  "id": "3.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ConnectionStatus": 0,
    "Conprofileerror": 0,
    "IPv4Adrress": "0.0.0.0",
    "IPv6Adrress": "0::0",
    "Speed_Dl": 0,
    "Speed_Ul": 0,
    "DlRate": 0,
    "UlRate": 0,
    "ConnectionTime": 0,
    "UlBytes": 0,
    "DlBytes": 0
  },
  "id": "3.1"
}
```

**Params:**

- `ConnectionStatus`:
  - 0: disconnected
  - 1: connecting
  - 2: connected
  - 3: disconnecting
- `Conprofileerror`: profile error code
  - 0: no error
  - 1: apn error
  - 2: Pdp error
- `IPv4Adrress`: Connected ipv4 address
- `IPv6Adrress`: Connected ipv6 address
- `Speed_Dl`: Unknown for now
- `Speed_Ul`: Unknown for now
- `DlRate`: Current download rate (bps)
- `UlRate`: Current upload rate (bps)
- `ConnectionTime`: ConnectionTime (s);当次，断开拨号后重新统计
- `UlBytes`: Upload bytes(B);当次，断开拨号后重新统计
- `DlBytes`: Download bytes(B);当次，断开拨号后重新统计

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "030101",
    "message": "Get connection state failed."
  },
  "id": "3.1"
}
```

*******************************************************************
#### 3.3.2 Connect
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "Connect",
  "params": {},
  "id": "3.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "3.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "030201",
    "message": "Connect failed. "
  },
  "id": "3.2"
}
```

****************************************************************
#### 3.3.3 DisConnect
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "DisConnect",
  "params": {
    "ReconnectFlag":1
  },
  "id": "3.3"
}
```

**Params:**

- `ReconnectFlag`:
> 可选值，参数不传时默认为0
  - 0: 断开之后网络切换时不重新拨号
  - 1: 断开之后网络重新自动拨号


**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "3.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "030301",
    "message": "DisConnect failed. "
  },
  "id": "3.3"
}
```

****************************************************************
#### 3.3.4 GetConnectionSettings
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetConnectionSettings",
  "params": {},
  "id": "3.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ConnectMode": 1,
    "RoamingConnect": 0,
    "PdpType": 0,
    "ConnOffTime": 600
  },
  "id": "3.4"
}
```

**Params:**

- `ConnectMode`:
  - 0: manual connect
  - 1: auto connect
- `RoamingConnect`: Under Roaming status if can connect
  - 0: when roaming can not connect
  - 1: when roaming can connect
- `PdpType`:
  - 0: IPV4
  - 1: PPP
  - 2: IPv6
  - 3: IPv4v6
- `ConnOffTime`: Unknown for now

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "030401",
    "message": "Get connection settings failed."
  },
  "id": "3.4"
}
```

****************************************************************
#### 3.3.5 SetConnectionSettings
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "SetConnectionSettings",
  "params": {
    "ConnectMode": 1,
    "RoamingConnect": 0,
    "PdpType": 0,
    "ConnOffTime": 600
  },
  "id": "3.4"
}
```

**Params:**

- refer to 3.3.4

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "3.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "030501",
    "message": "Set connection settings failed. "
  },
  "id": "3.5"
}
```

**********************************************************************
### 3.4 Network
#### 3.4.1 GetNetworkInfo
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetNetworkInfo",
  "params": {},
  "id": "4.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "PLMN": "00000",
    "NetworkType": 0,
    "NetworkName": "N/A",
    "SpnName": "N/A",
    "LAC": "0",
    "CellId": "0",
    "RncId": "reserved",
    "Roaming": 1,
    "Domestic_Roaming": 1,
    "SignalStrength": 0,
    "mcc": "0",
    "mnc": "0",
    "SINR": "FF",
    "RSRP": "-1",
    "RSSI": "-48",
    "eNBID": "0",
    "CGI": "000",
    "CenterFreq": "0.000000",
    "TxPWR": "0",
    "LTE_state": 0,
    "PLMN_name": "N/A",
    "Band": 44,
    "DL_channel": "reserved",
    "UL_channel": "reserved",
    "RSRQ": "2",
    "EcIo": 0,
    "RSCP": -1
  },
  "id": "4.1"
}
```

**Params:**

- `PLMN`: Public Land Mobile Network (Network)
- `NetworkType`: Network Type
  - 0: NO SERVER
  - 1: GPRS
  - 2: EDGE
  - 3: HSPA
  - 4: HSUPA
  - 5: UMTS
  - 6: HSPA+
  - 7: DC-HSPA+
  - 8: LTE
  - 9: LTE+
  - 10: CDMA
  - 11: GSM
  - 12: EVDO
  - 13: LTE-FDD
  - 14: LTE-TDD
  - 15: CDMA-->Ehrpd
- `NetworkName`:
- `SpnName`:
- `LAC`:
- `CellId`:
- `RncId`:
- `Roaming`:
  - 0: roaming
  - 1: no roaming
- `Domestic_Roaming`:
- `SignalStrength`:
  - -1: No service
  - 0: level 0
  - 1: level 1
  - 2: level 2
  - 3: level 3
  - 4: level 4
- `mcc`:
- `mnc`:
- `SINR`:
- `RSRP`:
- `RSSI`:
- `eNBID`:
- `CGI`:
- `CenterFreq`:
- `TxPWR`:
- `LTE_state`:
- `PLMN_name`:
- `Band`:
- `DL_channel`:
- `UL_channel`:
- `RSRQ`:
- `EcIo`:
- `RSCP`:

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040101",
    "message": "Get network information data error."
  },
  "id": "4.1"
}
```

****************************************************************
#### 3.4.2 SearchNetwork
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "SearchNetwork",
  "params": {},
  "id": "4.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "4.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040201",
    "message": "Search network failed."
  },
  "id": "4.2"
}
```

****************************************************************
#### 3.4.3 SearchNetworkResult
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "SearchNetworkResult",
  "params": {},
  "id": "4.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ListNetworkItem": [
      {
        "NetworkID": 0,
        "State": 1,
        "Numberic": "46001",
        "Rat": 2,
        "FullName": "UNICOM",
        "ShortName": "UNICOM",
        "mcc": "460",
        "mnc": "1"
      },
      {
        "NetworkID": 1,
        "State": 3,
        "Numberic": "46000",
        "Rat": 1,
        "FullName": "CMCC",
        "ShortName": "CMCC",
        "mcc": "460",
        "mnc": "0"
      }
    ],
    "SearchState": 2,
    "nw_list_len": 2
  },
  "id": "4.3"
}
```

**Params:**

- `SearchState`: Search state
  - 0: search not network
  - 1: searching
  - 2: search successful
  - 3: search failed
- `nw_list_len`: network list length
- `ListNetworkItem`: network list
- `NetworkID`: Network ID
- `State`:
  - 0: network unknown
  - 1: network available
  - 2: current register network
  - 3: forbidden network
- `Numberic`: Current network PLMN
- `Rat`:
  - 1: GSM
  - 2: UMTS
  - 3: LTE
  - 4: CDMA
  - 5: unknown
- `FullName`: network full name
- `ShortName`: network short name
- `mcc`:
- `mnc`:

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040301",
    "message": "Get result failed."
  },
  "id": "4.3"
}
```

****************************************************************
#### 3.4.4 RegisterNetwork
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "RegisterNetwork",
  "params": {
    "NetworkID":0
  },
  "id": "4.4"
}
```

**Params:**

- `NetworkID`: Network ID

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "4.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040401",
    "message": "Register network fail."
  },
  "id": "4.4"
}
```

****************************************************************
#### 3.4.5 GetNetworkRegisterState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetNetworkRegisterState",
  "params": {},
  "id": "4.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "regist_state": 3
  },
  "id": "4.5"
}
```

**Params:**

- `regist_state`:
  - 0: not regiseter
  - 1: registting
  - 2: register successful
  - 3: registration failed

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040501",
    "message": "Get register network state failed."
  },
  "id": "4.5"
}
```

****************************************************************
#### 3.4.6 GetNetworkSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetNetworkSettings",
  "params": {},
  "id": "4.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "NetworkMode": 0,
    "NetselectionMode": 0,
    "NetworkBand": 0,
    "DomesticRoam": 0,
    "DomesticRoamGuard": 0
  },
  "id": "4.6"
}
```

**Params:**

- `NetworkMode`:
  - 0: auto mode
  - 1: 2G only
  - 2: 3G only
  - 3: LTE only
  - 4: GSM_LTE
  - 5: UMTS_LTE
  - 6: GSM_UMTS
  - 7: CDMA_EVDO : for Y856 Sprint
  - 8: LTE_CDMA_EVDO: for Y856
  - 9: EVDO ONLY
  - 10: CDMA_Ehrpd
  - 11: CDMA Only(1x) Sprint
- `NetselectionMode`:
  - 0: auto
  - 1: manual
- `NetworkBand`:
  - 0: all band(1+6+10 Group)
  - 1: GSM all band(2+3+4+5 Group)
  - 2: GSM850
  - 3: GSM900
  - 4: GSM1800
  - 5: GSM1900
  - 6: WCDMA all band(7+8+9 Group)
  - 7: WCDMA 900
  - 8: WCDMA1800
  - 9: WCDMA2100
  - 10: LTE all band(11+12+13+14 Group)
  - 11: LTE800(LTE Band20)
  - 12: LTE900(LTE Band8)
  - 13: LTE1800(LTE Band3)
  - 14: LTE2600 (LTE Band7)
  - 15: LTE850(LTE Band26)
  - 16: LTE1900(LTE Band25)
  - 17: LTE2600(LTE Band41)
  - 18: CDMA BC0
  - 19: CDMA BC1
  - 20: CDMA BC10
  - 21: LTE_Band25_Band26_Band41
- `DomesticRoam`:
  - 0: off
  - 1: on
- `DomesticRoamGuard`:
  - 0: off
  - 1: on

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040601",
    "message": "Get network setting failed."
  },
  "id": "4.6"
}
```

****************************************************************
#### 3.4.7 SetNetworkSettings
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "SetNetworkSettings",
  "params": {
    "NetworkMode": 0,
    "NetselectionMode": 0,
    "NetworkBand": 0,
    "DomesticRoam": 0,
    "DomesticRoamGuard": 0
  },
  "id": "4.7"
}
```

**Params:**

- refer to 3.4.6

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "4.7"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "040701",
    "message": "Set network setting failed."
  },
  "id": "4.7"
}
```

***************************************************************************************
### 3.5. WLAN
#### 3.5.1 GetWlanState
> Introduction

**Request:**

```
{
  "jsonrpc": "2.0",
  "method": "GetWlanState",
  "params": {},
  "id": "5.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "Ap2GStatus":0,
    "Ap5GStatus":0
  },
  "id": "5.1"
}
```

**Params:**

- `Ap2GStatus`:
  - 0: off
  - 1: on

- `Ap5GStatus`:
  - 0: off
  - 1: on

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050101",
    "message": "Get WlAN state failed."
  },
  "id": "5.1"
}
```

****************************************************************
#### 3.5.2 SetWlanState
> 

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWlanState",
  "params": {
    "Ap2GStatus":0,
    "Ap5GStatus":0
  },
  "id": "5.2"
}
```

**Params:**

- `Ap2GStatus`:
  - 0: off
  - 1: on

- `Ap5GStatus`:
  - 0: off
  - 1: on


**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "5.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050201",
    "message": "Set WLAN State failed."
  },
  "id": "5.2"
}
```
- 050201: Set WLAN State failed.
- 050202: WLAN is off.
- 050203: WLAN is on.

****************************************************************
#### ~~5.5.3 SetWlanOn~~
> turn On WiFi

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWlanOn",
  "params": {},
  "id": "5.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {

  },
  "id": "5.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050301",
    "message": "Set WLAN on failed."
  },
  "id": "5.3"
}
```
- 050301: Set WLAN on failed.
- 050302: WLAN is on.

****************************************************************
#### 3.5.4 GetWlanSettings
> Get wlan settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWlanSettings",
  "params": {},
  "id": "5.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "WiFiOffTime": 0,
    "AP2G":{
        "ApStatus": 1,
        "WMode": 3,
        "Ssid": "WebPocket-BAB5",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 2,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "CountryCode": "IT",
        "Bandwidth": 0
    },
    "AP2G_guest":{
        "ApStatus": 1,
        "WMode": 3,
        "Ssid": "WebPocket-BAB5",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "CountryCode": "IT",
        "Bandwidth": 0
    },
    "AP5G":{
        "ApStatus": 1,
        "WMode": 3,
        "Ssid": "WebPocket-BAB5-5G",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "CountryCode": "IT",
        "Bandwidth": 0
    },
    "AP5G_guest":{
        "ApStatus": 1,
        "WMode": 3,
        "Ssid": "AP5G_guest",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "CountryCode": "IT",
        "Bandwidth": 0
    }
  },
  "id": "5.4"
}
```

**Params:**

- `WiFiOffTime`: wifi off time
  - 0 means disable wifi auto off function
  - The other digits represent the time for sleep.
- `ApStatus`:
  - 0: off
  - 1: on
  - 2: WPS
- `WMode`:
  - 0: Auto
  - 1: 802.11b
  - 2: 802.11b/g
  - 3: 802.11b/g/n
  - 4: 802.11a
  - 5: 802.11a/n
  - 6: 802.11a/c
- `Ssid`:
- `SsidHidden`:
  - 0: disable
  - 1: enable,hidden SSID
- `Channel`: 0-14
  - 0: Auto
- `SecurityMode`:
  - 0: disable
  - 1: wep
  - 2: WPA
  - 3: WPA2
  - 4: WPA/WPA2
- `WepType`:
  - 0: OPEN
  - 1: share
- `WepKey`:
- `WpaType`:
  - 0: TKIP
  - 1: AES
  - 2: AUTO
- `WpaKey`:
- `CountryCode`:
- `ApIsolation`:
  - 0: disable
  - 1: enable
- `max_numsta`:
- `curr_num`:
- `CurChannel`:
- `Bandwidth`:
  - 0: 20MHz/40MHz
  - 1: 20MHz
  - 2: 40MHz
  - 3: 80MHz
  - 4: 40MHz/80MHz

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050401",
    "message": "Get WLAN Settings failed."
  },
  "id": "5.4"
}
```

****************************************************************
#### 3.5.5 SetWlanSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWlanSettings",
  "params": { 
    "WiFiOffTime": 0,
    "AP2G":{
        "ApStatus": 1,
        "WMode": 3,
        "Ssid": "WebPocket-BAB5",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "Bandwidth": 0,
        "CountryCode": "IT"
    },
    "AP2G_guest":{
        "ApStatus": 1,
        "WMode": 3,
        "Ssid": "WebPocket-BAB5",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "Bandwidth": 0,
        "CountryCode": "IT"
    },
    "AP5G":{
        "ApStatus": 1,
        "WMode": 4,
        "Ssid": "WebPocket-BAB5-5G",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "Bandwidth": 0,
        "CountryCode": "IT"
    },
    "AP5G_guest":{
        "ApStatus": 1,
        "WMode": 4,
        "Ssid": "AP5G_guest",
        "SsidHidden": 0,
        "Channel": 0,
        "SecurityMode": 3,
        "WepType": 0,
        "WepKey": "1234567890",
        "WpaType": 1,
        "WpaKey": "GE747TNT",
        "ApIsolation": 0,
        "max_numsta": 15,
        "curr_num": 0,
        "CurChannel": 8,
        "Bandwidth": 0,
        "CountryCode": "IT"
    }
  },
  "id": "5.5"
}
```

**Params:**

- refer to 3.5.4

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "5.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050501",
    "message": "Set WLAN Settings failed."
  },
  "id": "5.5"
}
```
- 050501 : Set WLAN Settings failed.
- 050502 : WIFI is off, can not set. mode.
- 050503 : WPS is working

****************************************************************
#### 3.5.6 SetWPSPin

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWPSPin",
  "params": {
    "WpsPin":"1234"
  },
  "id": "5.6"
}
```

**Params:**

- `WlanState`: The WPS PIN code.

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "5.6"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050601",
    "message": "Set WPS PBC failed."
  },
  "id": "5.6"
}
```
- 050601 : Set WPS PBC failed.
- 050602 : WPS PIN not support in  WEP, WPA, WPA2 SKIP mode.
- 050603 : set wps pbc failed, wps is active

****************************************************************
#### 3.5.7 SetWPSPbc
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWPSPbc",
  "params": {},
  "id": "5.7"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "5.7"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050703",
    "message": "set wps pbc failed, wps is active"
  },
  "id": "5.7"
}
```
- 050701 : Set WPS PBC failed.
- 050702 : WPS PIN not support in  WEP, WPA, WPA2 SKIP mode.
- 050703 : set wps pbc failed, wps is active

****************************************************************
#### 3.5.8 GetWlanSupportMode

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWlanSupportMode",
  "params": {},
  "id": "5.8"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "WlanAPMode": 0
  },
  "id": "5.8"
}
```

**Params:**

- `WlanAPMode`: wifi AP mode
  - 0: 2.4G
  - 1: 5G
  - 2: 2.4G+2.4G
  - 3: 5G+5G

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050801",
    "message": "Get wlan support mode failed"
  },
  "id": "5.8"
}
```

****************************************************************
#### 3.5.9 GetWlanStatistics
> Get Wlan Statistics

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWlanStatistics",
  "params": {},
  "id": "5.9"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "List": [{
          "Ssid": "HH70-459D",
          "ReceivedByte": 0,
          "ReceivedPacket": 0,
          "ReceivedError": 0,
          "ReceivedDiscarded": 0,
          "SentByte": 0,
          "SentPacket": 0,
          "SentError": 0,
          "SentDiscarded": 0
      }, …]
  },
  "id": "5.9"
}
```

**Params:**

- `List`: Array
- `Ssid`: Current active SSID
- `ReceivedByte`: The data that LAN Port receive.
- `ReceivedPacket`: The data packets count that LAN Port receive.
- `ReceivedError`: The error data count that LAN Port receive.
- `ReceivedDiscarded`: The receive packets count that LAN Port discarded.
- `SentByte`: The data that LAN Port sent.
- `SentPacket`: The data packets count that LAN Port sent.
- `SentError`: The error data count that LAN Port sent.
- `SentDiscarded`: The sent packets count that LAN Port discarded.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "050901",
    "message": "Get WLAN Statistics failed."
  },
  "id": "5.9"
}
```

**************************************************************************
### 3.6 SMS
#### 3.6.1 getSmsInitState

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getSmsInitState",
  "params": {},
  "id": "6.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "state": 1
  },
  "id": "6.1"
}
```

**Params:**

- `state`: The status of the SMS initing.
  - 0: Complete
  - 1: Initing

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060101",
    "message": "Get SMS init status failed."
  },
  "id": "6.1"
}
```

*****************************************************************
#### 3.6.2 ~~GetSMSContactList~~
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSMSContactList",
  "params": {
    "Page": 0
  },
  "id": "6.2"
}
```

**Params:**

- `Page`: Pages that SMS Contact list separate
  - 0: return all Contact SMS.
  - 1-~:

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
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
  "id": "6.2"
}
```

**Params:**

- `SMSContactList`: ContactList List
- `ContactId`: The list ID.
- `PhoneNumber`: The SMS Contact info, may one and more.
- `SMSId`: The latest SMS id.
- `SMSType`:
  - 0: read
  - 1: unread
  - 2: sent
  - 3: sent failed
  - 4: report
  - 5: flash
  - 6: draft
- `ReportStatus`:
- `SMSContent`: The first 40 characters of the latest SMS.
- `SMSTime`: the latest SMS time.format: YYYY-MM-DD hh:mm: ss
- `UnreadCount`: The count of the unread SMS that the phone number has.
- `TSMSCount`: The total count of the SMS that the phone number has.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060201",
    "message": "Get SMS Contact List failed."
  },
  "id": "6.2"
}
```

*****************************************************************
#### 3.6.3 ~~GetSMSContentList~~
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSMSContentList",
  "params": {
    "Page": 0,
    "ContactId": 1
  },
  "id": "6.3"
}
```

**Params:**

- `Page`:Pages that SMS Content list separate
  - 0: return allSMS content.
  - 1: the first page ,every page has 10  SMS content list.
- `ContactId`:The id in 6.2 GetSMSContactList

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SMSContentList": [
      {
        "SMSId": 65538,
        "SMSType": 0,
        "ReportStatus": 0,
        "SMSContent": "88888888554",
        "SMSTime": "2016-06-30 10:02:22"
      },
      {
        "SMSId": 65537,
        "SMSType": 0,
        "ReportStatus": 0,
        "SMSContent": "874651",
        "SMSTime": "2016-06-30 10:01:48"
      }
    ],
    "Page": 0,
    "ContactId": 1,
    "PhoneNumber": [
      "18617092862"
    ],
    "TotalPageCount": 1
  },
  "id": "6.3"
}
```

**Params:**

- `SMSContentList`:
- `SMSId`: The single SMS id.
- `SMSType`:
  - 0: read
  - 1: unread
  - 2: sent
  - 3: sent failed
  - 4: report
  - 5: flash
  - 6: draft
- `ReportStatus`:
- `SMSContent`: The all content of the SMS.
- `SMSTime`: The single SMS time. format: YYYY-MM-DDhh:mm:ss
- `Page`:
- `ContactId`: The single SMS id.
- `PhoneNumber`: The SMS Contact info, may one and more.
- `TotalPageCount`:

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060301",
    "message": "Get SMS content list failed."
  },
  "id": "6.3"
}
```

****************************************************************
#### 3.6.4 GetSMSStorageState
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSMSStorageState",
  "params": {},
  "id": "6.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "UnreadReport": 0,
    "LeftCount": 98,
    "MaxCount": 100,
    "TUseCount": 2,
    "UnreadSMSCount": 0
  },
  "id": "6.4"
}
```

**Params:**

- `UnreadReport`:
  - 0: no new status report
  - 1: exit new status report
- `LeftCount`: The left space that store the SMS
- `MaxCount`:  The current max space (SMS Count) that store the SMS.
- `TUseCount`: Current store SMS total count.
- `UnreadSMSCount`: Current store unread SMS count.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060401",
    "message": "Get SMS Storage state failed."
  },
  "id": "6.4"
}
```

****************************************************************
#### 3.6.5 DeleteSMS
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "DeleteSMS",
  "params": {
    "DelFlag": 1,
    "SMSArray": [1,2]
  },
  "id": "6.5"
}
```
**Params:**

- `DelFlag`: This flag means the SMS that want to delete.
  - 0: delete all SMS
  - 1: delete one record in Contact SMS list
  - 2: delete one record in Content  SMS list
  - 3: delete one or more SMS
- `SMSArray`: Array|SMS id list.This id must be Content SMS list.

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "6.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060501",
    "message": "Delete SMS failed."
  },
  "id": "6.5"
}
```

****************************************************************
#### 3.6.6 SendSMS
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SendSMS",
  "params": {
    "SMSId": -1,
    "SMSContent": "Hello World",
    "PhoneNumber": ["+84912345"],
    "SMSTime": "2014-09-11 18:06:00"
  },
  "id": "6.6"
}
```

**Params:**

- refer to 3.6.3

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "6.6"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060601",
    "message": "Send SMS failed."
  },
  "id": "6.6"
}
```
- 060601: Send SMS failed.
- 060602: Fail still sending last message.
- 060603: Fail with store space full.

****************************************************************
#### 3.6.7 GetSendSMSResult
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSendSMSResult",
  "params": {},
  "id": "6.7"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SendStatus": 2
  },
  "id": "6.7"
}
```

**Params:**

- `SendStatus`:
  -  0 : none
  -  1 : sending
  -  2 : success
  -  3: failstill sending last message
  -  4 : fail with Memory full
  -  5: fail

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060701",
    "message": "Get send SMS status failed."
  },
  "id": "6.7"
}
```

****************************************************************
#### 3.6.8 SaveSMS
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SaveSMS",
  "params": {
    "SMSId": 1,
    "PhoneNumber": ["134544555"],
    "SMSContent": "hi!",
    "SMSTime": "2014-09-11 18:06:00"
  },
  "id": "6.8"
}
```

**Params:**

- refer to 3.6.3

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "6.8"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060801",
    "message": "Save SMS failed."
  },
  "id": "6.8"
}
```
- 060801: Save SMS failed.
- 060802: Fail with store space full.

****************************************************************
#### 3.6.9 GetSMSSettings
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSMSSettings",
  "params": {},
  "id": "6.9"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SMSCenter": "+8613010888500",
    "StoreFlag": 1,
    "SMSReportFlag": 0
  },
  "id": "6.9"
}
```

**Params:**

- `SMSCenter` :the Center number of the SIM Card.
- `StoreFlag`: SMS store space
  - 0: SIM Card
  - 1: ME
- `SmsReportFlag`:SMS report is enable or disable
  - 0: Disable
  - 1: Enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "060901",
    "message": "Get short message settings failed."
  },
  "id": "6.9"
}
```

****************************************************************
#### 3.6.10 SetSMSSettings
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetSMSSettings",
  "params": {
    "SMSReportFlag": 0,
    "StoreFlag": 1,
    "SMSCenter": "+8613010888500"
  },
  "id": "6.10"
}
```

**Params:**

- refer to 3.6.9

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "6.10"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061001",
    "message": "Set SMS settings failed."
  },
  "id": "6.10"
}
```

****************************************************************
#### 3.6.11 GetSingleSMS
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSingleSMS",
  "params": {
    "SMSId": 65538,
  },
  "id": "6.11"
}
```

**Params:**

- `SMSId`: The single SMS id.

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "PhoneNumber": "13713804698"
    "SMSType": 0,
    "SMSContent": "Hello World",
    "SMSId": "3",
    "SMSTime": "2014-01-12 11:06:58"
  },
  "id": "6.11"
}
```

**Params:**

- refer to 3.6.3

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061101",
    "message": "Get single sms failed."
  },
  "id": "6.11"
}
```

****************************************************************
#### 3.6.12 ~~getSMSStateByLocation~~
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getSMSStateByLocation",
  "params": {},
  "id": "6.12"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "MaxCount": 100,
    "LeftCount": 96
  },
  "id": "6.12"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061201",
    "message": "Get SMS State By Location failed"
  },
  "id": "6.12"
}
```

****************************************************************
#### 3.6.13 ~~ImportSmsToDevice~~
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "ImportSmsToDevice",
  "params": {},
  "id": "6.13"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "6.13"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061301",
    "message": "Import Sms To Device failed"
  },
  "id": "6.13"
}
```

****************************************************************
#### 3.6.14 getSMSAutoRedirectSetting
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getSMSAutoRedirectSetting",
  "params": {},
  "id": "6.14"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "redirect_flag": 0,
    "redirect_number": ""
  },
  "id": "6.14"
}
```

**Params:**

- `redirect_number` :the  number of redirect
- `redirect_flag`:
  - 0: Disable
  - 1: Enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061401",
    "message": "Get SMS Auto Redirect Setting failed"
  },
  "id": "6.14"
}
```

****************************************************************
#### 3.6.15 setSMSAutoRedirectSetting
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "setSMSAutoRedirectSetting",
  "params": {
    "redirect_flag": 0,
    "redirect_number": "",
    "SMSTime": "2017-03-24 15:51:00"
  },
  "id": "6.15"
}
```

**Params:**
- `SMSTime` :The SMS time.format: YYYY-MM-DD hh:mm: ss
- refer to 3.6.14

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "6.15"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061501",
    "message": "Set SMS Auto Redirect Setting failed"
  },
  "id": "6.15"
}
```

****************************************************************
#### 3.6.16 ~~GetNewMessage~~
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetNewMessage",
  "params": {},
  "id": "6.16"
}
```

**Params:**

- refer to 3.6.14

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "PhoneNumber": "18617092862",
    "SMSType": 1,
    "SMSContent": "dsfasdgdsg",
    "SMSId": 65538,
    "SMSTime": "2016-07-22 17:23:11",
    "SMSTimezone": 942735648
  },
  "id": "6.16"
}
```
**Params:**

- refer to 3.6.14

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061601",
    "message": "Get New Message failed"
  },
  "id": "6.16"
}
```

*****************************************************************
#### 3.6.17 GetSMSListByContactNum
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSMSListByContactNum",
  "params": {
    "Page": 1,
    "key": "inbox"
  },
  "id": "6.17"
}
```

**Params:**

- `Page`: Pages that SMS list by Contact Number separate according to key
  - 1: Every page have 10 records.
- `key`
  - "inbox": Received sms list key
  - "draft": Saved sms list key
  - "send": Send sms list key

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SMSList": [{
        "PhoneNumber": ["10010", "1001011"],
        "SMSId": 65542,
        "SMSType": 6,
        "SMSContent": "[[",
        "SMSTime": "07-12-2016 15:05:21"
    }],
    "Page": 1,
    "TotalPageCount": 1
  },
  "id": "6.17"
}
```

**Params:**

- `SMSList`: SMS List according to request params key and page
- `PhoneNumber`: The SMS Contact phone number info, may one and more.
- `SMSId`: The SMS id.
- `SMSType`:
  - 0: read
  - 1: unread
  - 2: sent
  - 3: sent failed
  - 4: report
  - 5: flash
  - 6: draft
- `SMSContent`: The first 40 characters of the SMS.
- `SMSTime`: The SMS time.format: YYYY-MM-DD hh:mm: ss
- `TotalPageCount`: Total page count according to key.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "061701",
    "message": "Get SMS List failed."
  },
  "id": "6.17"
}
```

****************************************************************
### 3.7 Statistics
#### 3.7.1 GetUsageRecord
> Get Usage Record

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetUsageRecord",
  "params": {
     "current_time": "2014-09-11 18:06:00"
  },
  "id": "7.1"
}
```

**Params:**

- `current_time`: current time (yyyy-mm-dd HH:MM:SS)

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "TConnTimes": 0,
    "CurrConnTimes": 0,
    "HCurrUseUL": 0,
    "HCurrUseDL": 0,
    "HUseData": 0,
    "RCurrUseUL": 0,
    "RCurrUseDL": 0,
    "RoamUseData": 0,
    "MonthlyPlan": 0,
    "clear_time": 0
  },
  "id": "7.1"
}
```

**Params:**

- `TConnTimes`: The total connected Internet times.  (unit:second)
- `CurrConnTimes`: current connected Internet times. (uint:second)
- `HCurrUseUL`: The mothly use upload data in home network.（unit:b）
- `HCurrUseDL`: The mothly use download data in home network.（unit:b）
- `HUseData`: The mothly used data in home network.（unit:b）
- `RCurrUseUL`: The mothly use upload data in roaming network.（unit:b）
- `RCurrUseDL`: The mothly use download data in roaming network.（unit:b）
- `RoamUseData`: The mothly used data in roaming network. (unit:b)
- `MonthlyPlan`: The Max usage date that the device should use, when the real usage is more than this data, the connection must disconnect.（unit:b）
- `clear_time`: clear hisotry record time.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "070101",
    "message": "Get Usage Record failed"
  },
  "id": "7.1"
}
```

*****************************************************************
#### 3.7.2 SetUsageRecordClear

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetUsageRecordClear",
  "params": {
    "clear_time": "2014-11-06 14:03:20"
  },
  "id": "7.2"
}
```

**Params:**

- `clear_time`: Current time for clearing usage.

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "7.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "070201",
    "message": "Clear all usage records failed."
  },
  "id": "7.2"
}
```

*****************************************************************
#### 3.7.3 GetUsageSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetUsageSettings",
  "params": {},
  "id": "7.3"
}
```

**Response:**
```
{
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
  "id": "7.3"
}
```

**Params:**

- `BillingDay`: Billing day (Min:1, Max:31)
- `MonthlyPlan`: The max data that on month could use. If this value =0, this means no limited.
- `UsedData`: The total roam and home used data in month. (单位为byte)
- `Unit`: The unit function flage
  - 0: MB
  - 1: GB
  - 2: KB
- `TimeLimitFlag`: The time limit function flage
  - 0: disable
  - 1: enable
- `TimeLimitTimes`: The time limit function open, must set the limit time.(单位为分钟)
- `UsedTimes`: The used time that after open time limit function.(单位为分钟)
- `AutoDisconnFlag`: This flage control the disconnection when the usage settings get conditions.
  - 0: disable, not auto disconnect
  - 1: enable, auto disconnect

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "070301",
    "message": "Get Usage Settings failed"
  },
  "id": "7.3"
}
```

*****************************************************************
#### 3.7.4 SetUsageSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetUsageSettings",
  "params": {
    "BillingDay": 1,
    "MonthlyPlan": 0,
    "UsedData": 0,
    "Unit": 1,
    "TimeLimitFlag": 0,
    "TimeLimitTimes": 5,
    "UsedTimes": 0,
    "AutoDisconnFlag": 0
  },
  "id": "7.4"
}
```

**Params:**

- refer to 3.7.3

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "7.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "070401",
    "message": "Set Usage Settings failed"
  },
  "id": "7.4"
}
```

**********************************************************************************************************************************
### 3.8 USSD
#### 3.8.1 SendUSSD
> Send USSD

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SendUSSD",
  "params": {
    "UssdContent": "*#189",
    "UssdType": 1
  },
  "id": "8.1"
}
```
**Params:**

- `UssdContent`: Send USSD content
- `UssdType`:
  - 0: none;
  - 1: done;
  - 2: more;
  - 3: abort
  - 4: other;
  - 5: NoSUP;
  - 6: timeout
  - 7: max;

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {}
  "id": "8.1"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "080101",
    "message": "Send USSD failed."
  },
  "id": "8.1"
}
```

**********************************************************************************************************************************
#### 3.8.2 GetUSSDSendResult
> Get Send USSD result

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetUSSDSendResult",
  "params": {},
  "id": "8.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SendState": 0,
    "UssdType": 0,
    "UssdContent": "",
    "UssdContentLen": 0
  },
  "id": "8.2"
}
```
**Params:**

- `SendState`: SendUSSD State
  - 0: none
  - 1: sending
  - 2: complete
- `UssdType`:
  - 0: none;
  - 1: done;
  - 2: more;
  - 3: abort
  - 4: other;
  - 5: NoSUP;
  - 6: timeout
  - 7: max;
- `UssdContent`: Response USSD content
- `UssdContentLen`: ResponseUSSD content length

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "080201",
    "message": "Get send USSD result failed."
  },
  "id": "8.2"
}
```

**********************************************************************************************************************************
#### 3.8.3 SetUSSDEnd
> End USSD

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetUSSDEnd",
  "params": {},
  "id": "8.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "8.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "080301",
    "message": "Set USSD end failed."
  },
  "id": "8.3"
}
```

**********************************************************************************************************************************

### 3.9 Update
#### 3.9.1 GetDeviceNewVersion
> Get Device New Version Info

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetDeviceNewVersion",
  "params": {},
  "id": "9.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "State": 0,
    "Version": "0100100_._",
    "total_size": 0
  },
  "id": "9.1"
}
```

**Params:**

- `State`: Current Check State
  - 0: checking
  - 1: New version
  - 2: no new version
  - 3: no connect
  - 4: service not available
  - 5: check error(time out and no new version etc…)
- `Version`: The new software version number on the FOTA Sever.
- `total_size`: The size of new software(B)

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090101",
    "message": "Get New version s failed."
  },
  "id": "9.1"
}
```

*************************************************************************
#### 3.9.2 SetFOTAStartDownload
> Start Download Fota

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetFOTAStartDownload",
  "params": {},
  "id": "9.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090201",
    "message": "Set device download failed."
  },
  "id": "9.2"
}
```

*************************************************************************
#### 3.9.3 GetDeviceUpgradeState

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetDeviceUpgradeState",
  "params": {},
  "id": "9.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "Status": 0,
    "Process": 0
  },
  "id": "9.3"
}
```

**Params:**

- `Status`: Current Check State
  - 0: No start update(UI does not send the start update command)
  - 1: updating (Download Firmware phase)
  - 2: complete
- `Process`: If Status =1,Process:1- 100

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090301",
    "message": "Get device update state failed."
  },
  "id": "9.3"
}
```

*************************************************************************
#### 3.9.4 SetDeviceUpdateStop

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceUpdateStop",
  "params": {},
  "id": "9.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090401",
    "message": "Set device update stop failed."
  },
  "id": "9.4"
}
```

*************************************************************************
#### 3.9.5 SetCheckNewVersion

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetCheckNewVersion",
  "params": {},
  "id": "9.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090501",
    "message": "set check device new version failed ."
  },
  "id": "9.5"
}
```

*************************************************************************
#### 3.9.6 SetDeviceStartUpdate
> Start Update device after fota pakage Downloaded.
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceStartUpdate",
  "params": {},
  "id": "9.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.6"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090601",
    "message": "set device start update failed."
  },
  "id": "9.6"
}
```

******************************************************************
#### 3.9.7 uploadLocalUpdateSettings
> upload and update local update settings

`URL:/goform/uploadLocalUpdateSettings`

**Request:**
```
Content-Disposition: form-data; 
name="iptUpload"; 
filename="backup-HH70-2016-12-7.tar.gz"
Content-Type: application/octet-stream
```

**Response:**
```
{
"error": "0"
}
```

**Response Error:**
```
{
  "error": "1"
}
```
- 0: success
- 1: failed
- 2: call API wrong
- 3: UI parameter wrong
- 4: data too long, no memory to use

*********************************************************************
#### 3.9.8 SetSearchUSBLocalUpdate
> Start Update device after fota pakage Downloaded.  
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetSearchUSBLocalUpdate",
  "params": {},
  "id": "9.8"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.8"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090801",
    "message": "set device start update failed."
  },
  "id": "9.8"
}
```

******************************************************************
#### 3.9.9 GetUSBLocalUpdateList
> Start Update device after fota pakage Downloaded.  
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetUSBLocalUpdateList",
  "params": {},
  "id": "9.9"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "List":[
       {"usbUpgradeID":"001","usbUpgradePath":""}
       ...
    ],
    "Status":0,
	"Scanned":0
  },
  "id": "9.9"
}
```
**Params:**

- `Status`:
  - 0: no search,idle
  - 1: searching...
  - 2: search complete
  - 3: cancel search
  - 4: update   
- 'Scanned':  
  - file count
- `List`: data list
  - "usbUpgradeID":int  
  - "usbUpgradePath": path name

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "090901",
    "message": "get list failed."
  },
  "id": "9.9"
}
```

******************************************************************
#### 3.9.10 SetStopSearchUSBLocalUpdate
> Start Update device after fota pakage Downloaded.  
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetStopSearchUSBLocalUpdate",
  "params": {},
  "id": "9.10"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.10"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "091001",
    "message": "set stop search USBLocalUpdate failed."
  },
  "id": "9.10"
}
```

******************************************************************
#### 3.9.11 SetStartUSBLocalUpdate
> Start Update device after fota pakage Downloaded.  
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetStartUSBLocalUpdate",
  "params": {
	"usbUpgradeID":"00"  
	},
  "id": "9.11"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "9.11"
}
```
**Params:**

- `usbUpgradeID`:  
  - int
  
**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "091101",
    "message": "set stop search USBLocalUpdate failed."
  },
  "id": "9.11"
}
```

******************************************************************
### 3.10 Firewall
#### 3.10.1 GetMacFilterSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetMacFilterSettings",
  "params": {},
  "id": "10.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "filter_policy": 1,
    "MacAllowList": [
      "00:1D:0F:10:2D:D5"
    ],
    "MacDenyList": [
      "00:1D:0F:10:2D:D9",
      "00:1D:0F:10:2D:D1"
    ]
  },
  "id": "10.1"
}
```

**Params:**

- `filter_policy`:
  - 0: Disable
  - 1: allow
  - 2: deny
- `MacAllowList`: The Allow Mac address.
- `MacDenyList`: The Deny Mac address.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100101",
    "message": "Get MAC Filter Settingsfailed. "
  },
  "id": "10.1"
}
```

****************************************************************
#### 3.10.2 SetMacFilterSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetMacFilterSettings",
  "params": {
    "filter_policy": 1,
    "MacAllowList": ["44:44:22:d5:21:24", …],
    "MacDenyList": ["22:44:44:a5:24:44", …]
  },
  "id": "10.2"
}
```

**Params:**

- refer to 3.10.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100201",
    "message": "Set MAC Filter settingsfailed."
  },
  "id": "10.2"
}
```
- 100201: Set MAC Filter settingsfailed.
- 100202: WPS is on, set failed.

****************************************************************
#### 3.10.3 getPortFwding

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getPortFwding",
  "params": {},
  "id": "10.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "total_num": 1,
    "portfwd_list": [{
      "list_id": 1, 
      "portfwd_name": "name1",
      "private_ip": "192.168.1.1",
      "private_port": 88,
      "global_port": 90,
      "fwding_protocol": 6,
      "fwding_status": 1
    },....]
  },
  "id": "10.3"
}
```

**Params:**

- `total_num`: The number of the port forwarding list.
- `portfwd_list`:
- `portfwd_name`:
- `private_ip`:
- `private_port`:
- `global_port`:
- `fwding_protocol`:
  - 6: TCP
  - 17: UDP
  - 253: TCP&UDP
- `fwding_status`:
  - 0: off
  - 1: on

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100301",
    "message": "Get port forwarding list failed."
  },
  "id": "10.3"
}
```

****************************************************************
#### 3.10.4 addPortFwding

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "addPortFwding",
  "params": {
    "portfwd_name": "name1",
    "private_ip": "192.168.1.1",
    "private_port": 88,
    "global_port": 90,
    "fwding_protocol": 6,
    "fwding_status": 1
  },
  "id": "10.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.4"
}
```

**Params:**

- refer to 3.10.3


**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100401",
    "message": "Add new port forwarding failed. "
  },
  "id": "10.4"
}
```

****************************************************************
#### 3.10.5 deletePortFwding

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "deletePortFwding",
  "params": {
    "portfwd_name": "name1",
    "private_ip": "192.168.1.1",
    "private_port": 88,
    "global_port": 90,
    "fwding_protocol": 6,
    "fwding_status": 1
  },
  "id": "10.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100501",
    "message": "Delete port forwarding failed."
  },
  "id": "10.5"
}
```

****************************************************************
#### 3.10.6 editPortFwding

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "editPortFwding",
  "params": { 
    "old_portfwd_name": "name1",
    "old_private_ip": "192.168.1.1",
    "old_private_port": 88,
    "old_global_port": 90,
    "old_fwding_protocol": 6,
    "old_fwding_status": 1,
    "new_portfwd_name": "name1",
    "new_private_ip": "192.168.1.1",
    "new_private_port": 88,
    "new_global_port": 90,
    "new_fwding_protocol": 6,
    "new_fwding_status": 1
  },
  "id": "10.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.6"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100601",
    "message": "Edit port forwarding failed. "
  },
  "id": "10.6"
}
```

****************************************************************
#### 3.10.7 SetPortFwding
>Not Support

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": " SetPortFwding",
  "params": {
    "total_num": 1,
    "portfwd_list": [{
      "portfwd_name": "name1",
      "private_ip": "192.168.1.1",
      "private_port": 88,
      "global_port": 90,
      "fwding_protocol": 6,
      "fwding_status": 1
    },...]
  },
  "id": "10.7"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.7"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100701",
    "message": "Set port forwarding failed. "
  },
  "id": "10.7"
}
```

****************************************************************
#### 3.10.8 getDMZInfo

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getDMZInfo",
  "params": {},
  "id": "10.8"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "dmz_status": 1,
    "dmz_ip": "192.168.1.60"
  },
  "id": "10.8"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100801",
    "message": "Get DMZ Settings failed."
  },
  "id": "10.8"
}
```

****************************************************************
#### 3.10.9 setDMZInfo

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "setDMZInfo",
  "params": {
    "dmz_status": 1,
    "dmz_ip": "192.168.1.60"
  },
  "id": "10.8"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.9"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "100901",
    "message": "Set DMZ settings failed."
  },
  "id": "10.9"
}
```

****************************************************************
#### 3.10.10 getIPFilterList

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getIPFilterList",
  "params": {},
  "id": "10.10"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ipFilter_list": [
      {
        "list_id": 0,
        "lan_ip": "192.168.1.15",
        "lan_port": 0,
        "wan_ip": "10.12.23.56",
        "wan_port": 80,
        "ip_protocol": 17,
        "ip_status": 1
      },...
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
      },...
    ],
    "total_num": 1,
    "filter_policy": 0
  },
  "id": "10.10"
}
```

**Params:**

- `total_num`: the count of record
- `ipFilter_list`: ipfilter list(deny)
- `ipFilterAllowlist`: ipfilter list(Allow) 
- `list_id`: record id
- `lan_ip`:
- `lan_port`:
- `wan_ip`:
- `wan_port`:
- `ip_protocol`:
  - 6: TCP
  - 17: UDP
  - 253: TCP&UDP
- `ip_status`:
  - 0: Disable
  - 1: Enable
- `filter_policy`:
  - 0: Disable
  - 1: deny
  - 2: allow

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101001",
    "message": "Get ip filter list failed."
  },
  "id": "10.10"
}
```

****************************************************************
#### 3.10.11 addIPFilter

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "addIPFilter",
  "params": {
    "wan_ip": "10.12.12.13",
    "lan_port": 0,
    "ip_status": 1,
    "ip_protocol": 6,
    "lan_ip": "192.168.1.188",
    "wan_port": 88,
    "filter_policy": 0
  },
  "id": "10.11"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.11"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101101",
    "message": "Add new ip filter failed. "
  },
  "id": "10.11"
}
```

****************************************************************
#### 3.10.12 deleteIPFilter

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "deleteIPFilter",
  "params": {
    "list_id_arr": [1,2]
  },
  "id": "10.12"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.12"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101201",
    "message": "Delete ip filter failed. "
  },
  "id": "10.12"
}
```

****************************************************************
#### 3.10.13 editIPFilter

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "editIPFilter",
  "params": {
    "list_id": 0,
    "lan_ip": "192.168.1.15",
    "lan_port": 0,
    "wan_ip": "10.12.23.56",
    "wan_port": 808,
    "ip_protocol": 17,
    "ip_status": 1,
    "filter_policy": 0
  },
  "id": "10.13"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.13"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101301",
    "message": "Edit ip filter failed."
  },
  "id": "10.13"
}
```

****************************************************************
#### 3.10.14 getFirewallSwitch

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getFirewallSwitch",
  "params": {},
  "id": "10.14"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "firewall_status": 1,
    "ipflt_status": 1,
    "wan_ping_status": 0,
    "port_forward_status": 1
  },
  "id": "10.14"
}
```

**Params:**

- `firewall_status`:
  - 0: disable
  - 1: enable
- `ipflt_status`:
  - 0: disable
  - 1: deny
  - 2: allow
- `wan_ping_status`:
  - 0: disable
  - 1: enable
- `port_forward_status`:
  - 0: disable port forwading function
  - 1: enable port forwading function

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101401",
    "message": "Get Firewall Switch failed."
  },
  "id": "10.14"
}
```

****************************************************************
#### 3.10.15 setFirewallSwitch

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "setFirewallSwitch",
  "params": {
    "firewall_status": 1,
    "ipflt_status": 0,
    "wan_ping_status": 0,
    "port_forward_status": 1
  },
  "id": "10.15"
}
```

**Params:**

- refer to 3.10.14

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.15"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101501",
    "message": "Set Firewall Switch failed. "
  },
  "id": "10.15"
}
```

****************************************************************
#### 3.10.16 SetIPFilter
>Not Support

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetIPFilter",
  "params": {
    "total_num": 1,
    "filter_policy": 0,
    "ipFilter_list": [{
      "list_id": 0,
      "lan_ip": "192.168.1.1",
      "lan_port": 80,
      "wan_ip": "20.12.12.5",
      "wan_port": 85,
      "ip_protocol": 6,
      "ip_status": 0
    },...]
  },
  "id": "10.16"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.16"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101601",
    "message": "Set ip filter failed."
  },
  "id": "10.16"
}
```

****************************************************************
#### 3.10.17 GetVPNPassthrough
>Not Support

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetVPNPassthrough",
  "params": {},
  "id": "10.17"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "status": 1,
    "vpn_server": "192.168.1.60" (optional)
  },
  "id": "10.17"
}
```

**Params:**

- `status`:
  - 0: VPN pass-through off
  - 1: VPN pass-through on
- `vpn_server`: optional

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101701",
    "message": "Get VPN pass-through Settings failed."
  },
  "id": "10.17"
}
```

****************************************************************
#### 3.10.18 SetVPNPassthrough
>Not Support

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetVPNPassthrough",
  "params": {
    "status": 1,
    "vpn_server": "192.168.1.60"
  },
  "id": "10.18"
}
```

**Params:**

- refer to 3.10.17

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.18"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101801",
    "message": "Set VPN pass-through settings failed. "
  },
  "id": "10.18"
}
```

****************************************************************
#### 3.10.19 getUrlFilterSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getUrlFilterSettings",
  "params": {},
  "id": "10.19"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "UrlAllowList": ["http://www.baidu.com"],
    "UrlDenyList": ["http://www.baidu2.com"],
    "filter_policy": 0
  },
  "id": "10.19"
}
```

**Params:**

- `filter_policy`:
  - 0: Disable
  - 1: allow
  - 2: deny
- `UrlAllowList`:The Allow Url address.
- `UrlDenyList`:The Deny Url address.


**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101901",
    "message": "Get URL Filter Settings failed. "
  },
  "id": "10.19"
}
```

****************************************************************
#### 3.10.20 SetUrlFilterSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetUrlFilterSettings",
  "params": {
    "filter_policy": 1,
    "UrlAllowList": ["http://www.baidu1.com"],
    "UrlDenyList": ["http://www.taobao.com"]
  },
  "id": "10.20"
}
```

**Params:**

- refer to 3.10.19

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.20"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "102001",
    "message": "Set URL Filter settings failed."
  },
  "id": "10.20"
}
```

****************************************************************
#### 3.10.21 GetWanAccess

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWanAccess",
  "params": {},
  "id": "10.21"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "disableWanAcess": 1
  },
  "id": "10.21"
}
```

**Params:**

- `disableWanAcess`:
  - 0: enable wan access
  - 1: disable wan access

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "102101",
    "message": "Get Wan Access setting failed."
  },
  "id": "10.21"
}
```

****************************************************************
#### 3.10.22 SetWanAccess

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWanAccess",
  "params": {
    "disableWanAcess": 1
  },
  "id": "10.22"
}
```

**Params:**

- refer to 3.10.21

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.22"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "102201",
    "message": "Set Wan Access setting failed."
  },
  "id": "10.22"
}
```

****************************************************************
#### 3.10.23 GetALGSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetALGSettings",
  "params": {},
  "id": "10.23"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "PptpStatus": 0,
    "H323AlgStatus": 0,
    "SipAlgStatus":0,
    "SipAlgPort":5060,
    "FtpStatus": 0
  },
  "id": "10.23"
}
```

**Params:**

- `PptpStatus`:
  - 0: disable
  - 1: enable
- `H323AlgStatus`:
  - 0: disable
  - 1: enable
- `SipAlgStatus`:
  - 0: disable
  - 1: enable
- `SipAlgPort`:
  - 0: disable
  - 1: enable
- `FtpStatus`:
  - 0: disable
  - 1: enable
**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "102301",
    "message": "Get ALG Settings failed."
  },
  "id": "10.23"
}
```

****************************************************************
#### 3.10.24 SetALGSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetALGSettings",
  "params": {
    "PptpStatus": 0,
    "H323AlgStatus": 0,
    "SipAlgStatus":0,
    "SipAlgPort":5060,
    "FtpStatus": 0
  },
  "id": "10.24"
}
```

**Params:**

- refer to 3.10.23

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.24"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "102401",
    "message": "Set ALG setting failed."
  },
  "id": "10.24"
}
```
****************************************************************
#### 3.10.25 GetParentalSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetParentalSettings",
  "params": {},
  "id": "10.25"
}
```
**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ParentalControl_list": [
      {
        "list_id": 0,
        "device_name":"huide-iPhone2",
        "mac_address": "a0:99:9b:70:0b:c4",
        "url": "http://www.baidu1.com",
        "forbidden_Starttime": "10:00",
        "forbidden_Endtime": "18:00",
        "Control_status":0
      },...
    ],
    "Control_policy": 0
  },
  "id": "10.25"
}
```

**Params:**

- `ParentalControl_list`: Parental Control list
- `list_id`: record id
- `device_name`: Device Name
- `mac_address`: Device mac address
- `url`:
- `forbidden_Starttime`:Internet forbidden time(Start)
- `forbidden_Endtime`:Internet forbidden time(End)
- `Control_status`: 
  - 0: Disable
  - 1: Enable
- `Control_policy`:
  - 0: Disable
  - 1: Enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101001",
    "message": "Get Parental Control list failed."
  },
  "id": "10.25"
}
```
*****************************************************************
#### 3.10.26 SetParentalSettings
> Set Parental Control Settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetParentalSettings",
  "params": {
    "ParentalControl_list": [
      {
        "list_id": 0,
        "device_name":"huide-iPhone2",
        "mac_address": "a0:99:9b:70:0b:c4",
        "url": "http://www.baidu1.com",
        "forbidden_Starttime": "10:00",
        "forbidden_Endtime": "18:00",
        "Control_status":0
      },...
    ],
    "Control_policy": 0
  },
  "id": "10.26"
}
```

**Params:**

- refer to 3.10.26

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.26"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "110201",
    "message": "Set Parental Control Settings failed."
  },
  "id": "10.26"
}
```
****************************************************************
#### 3.10.27 GetDdnsSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetDdnsSettings",
  "params": {},
  "id": "10.27"
}
```
**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "Ddns_list": [
      {
        "connection_status":"DDNS"
        "service_Provider": "DynDNS.org",
        "status":1,
        "domain_name": "hh33.home",
        "user_name": "admin",
        "password": "123456"
      },...
    ]
  },
  "id": "10.27"
}
```

**Params:**

- `Ddns_list`: DDNS list
- `connection_status`:DDNS
- `service_Provider`: Service Provider
- `status`:
  - 0: Off
  - 1: On
- `domain_name`:Domain Name
- `user_name`:User name
- `password`:Password

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "101001",
    "message": "Get DDNS list failed."
  },
  "id": "10.27"
}
```
*****************************************************************
#### 3.10.28 SetDdnsSettings
> Set Ddns Settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDdnsSettings",
  "params": {
    "Ddns_list": [
      {
        "connection_status":"DDNS"
        "service_Provider": "DynDNS.org",
        "status":1,
        "domain_name": "hh33.home",
        "user_name": "admin",
        "password": "123456"
      },...
    ]
  },
  "id": "10.28"
}
```

**Params:**

- refer to 3.10.28

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "10.28"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "110201",
    "message": "Set DDNS Settings failed."
  },
  "id": "10.28"
}
```
****************************************************************
### 3.11 LAN
#### 3.11.1 GetLanSettings
> Get Lan Settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetLanSettings",
  "params": {},
  "id": "11.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "DNSMode": 0,
    "DNSAddress1": "",
    "DNSAddress2": "",
    "IPv4IPAddress": "192.168.1.1",
    "host_name": "plus10.home",
    "SubnetMask": "255.255.255.0",
    "DHCPServerStatus": 1,
    "StartIPAddress": "192.168.1.100",
    "EndIPAddress": "192.168.1.200",
    "DHCPLeaseTime": 12
  },
  "id": "11.1"
}
```

**Params:**

- `DNSMode`: DNS mode
  - 0: off
  - 1: on
- `DNSAddress1`:
- `DNSAddress2`:
- `IPv4IPAddress`: IPv4 IP address, Gateway
- `host_name`: host name
- `SubnetMask`: Subnet Mask
- `DHCPServerStatus`: DHCP server status
  - 0:disable
  - 1:enable
- `StartIPAddress`: Start IP Address
- `EndIPAddress`: End IP Address
- `DHCPLeaseTime`: DHCP Lease Time (hours):1,6,12,24

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "110101",
    "message": "Get LAN Settings failed."
  },
  "id": "11.1"
}
```

*****************************************************************
#### 3.11.2 SetLanSettings
> Set Lan Settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetLanSettings",
  "params": {
    "DNSMode": 0,
    "DNSAddress1": "",
    "DNSAddress2": "",
    "IPv4IPAddress": "192.168.1.1",
    "host_name": "plus10.home",
    "SubnetMask": "255.255.255.0",
    "DHCPServerStatus": 1,
    "StartIPAddress": "192.168.1.100",
    "EndIPAddress": "192.168.1.200",
    "DHCPLeaseTime": 12
  },
  "id": "11.2"
}
```

**Params:**

- refer to 3.11.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "11.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "110201",
    "message": "Set LAN settings failed."
  },
  "id": "11.2"
}
```

****************************************************************
#### 3.11.3 GetLanStatistics
> Get Lan Statistics

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetLanStatistics",
  "params": {},
  "id": "11.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "List": [{
          "LanFlag": "LAN1",
          "ReceivedByte": 0,
          "ReceivedPacket": 0,
          "ReceivedError": 0,
          "ReceivedDiscarded": 0,
          "SentByte": 0,
          "SentPacket": 0,
          "SentError": 0,
          "SentDiscarded": 0
      }, …]
  },
  "id": "11.3"
}
```

**Params:**

- `List`: Array
- `LanFlag`: The LAN port flag
- `ReceivedByte`: The data that LAN Port receive.
- `ReceivedPacket`: The data packets count that LAN Port receive.
- `ReceivedError`: The error data count that LAN Port receive.
- `ReceivedDiscarded`: The receive packets count that LAN Port discarded.
- `SentByte`: The data that LAN Port sent.
- `SentPacket`: The data packets count that LAN Port sent.
- `SentError`: The error data count that LAN Port sent.
- `SentDiscarded`: The sent packets count that LAN Port discarded.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "110301",
    "message": "Get LAN Statistics failed."
  },
  "id": "11.3"
}
```

*****************************************************************
#### 3.11.4 GetLanPortInfo
> Get Lan Port Info

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetLanPortInfo",
  "params": {},
  "id": "11.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "List": [{
          "LanFlag": "LAN1",
          "ConnectionStatus": 0,
          "IPAddress": 0,
          "MACAddress": 0,
          "DHCPServer": 0
      }, …]
  },
  "id": "11.4"
}
```

**Params:**

- `List`: Array
- `LanFlag`: The LAN port flag
- `ConnectionStatus`: Connection Status
  - 0: Disconnected
  - 1: Connected
- `IPAddress`: Current IP Address
- `MACAddress`: MAC Address
- `DHCPServer`: DHCP Server IP address

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "110401",
    "message": "Get LAN port information failed."
  },
  "id": "11.4"
}
```

*****************************************************************
### 3.12 ConnectionDevices
#### 3.12.1 GetConnectedDeviceList
> Get Connected DeviceList

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetConnectedDeviceList",
  "params": {},
  "id": "12.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ConnectedList": [
      {
        "id": 1,
        "DeviceName": "USBdevice",
        "MacAddress": "3a:11:14:47:f6:a3",
        "IPAddress": "192.168.1.117",
        "AssociationTime": 0,
        "DeviceType": 1,
        "ConnectMode": 0,
        "InternetRight": 1,
        "StorageRight": 1
      }
    ]
  },
  "id": "12.1"
}
```

**Params:**

- `ConnectedList`: Connected List
- `id`: The list element only flag.
- `DeviceName`: The connected device name
- `MacAddress`: The connected device MAC address.
- `IPAddress`: The connected device IP address.
- `AssociationTime`: (Option) The device connected times. (s)
- `DeviceType`:
  - 0: use the web UI and login device;
  - 1: just connected to device but not login.
- `ConnectMode`:
  - 0: USB connect
  - 1: WIFI connect
- `InternetRight`: Device default Internet Right
  - 0: disable
  - 1: enable
- `StorageRight`: Device default Storage Right
  - 0: disable
  - 1: enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120101",
    "message": "Get Connected device list failed."
  },
  "id": "12.1"
}
```

******************************************************************
#### 3.12.2 GetBlockDeviceList
> Get Block Device List

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetBlockDeviceList",
  "params": {},
  "id": "12.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "BlockList": [
      {
        "id": 1,
        "DeviceName": "USBdevice",
        "MacAddress": "3a:11:14:47:f6:a3",
        "IPAddress": "192.168.1.117",
        "AssociationTime": 0,
        "DeviceType": 1,
        "ConnectMode": 0
      }
    ]
  },
  "id": "12.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120201",
    "message": "Get block device list failed."
  },
  "id": "12.2"
}
```

******************************************************************

#### 3.12.3 SetConnectedDeviceBlock
> Set Connected Device Block

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetConnectedDeviceBlock",
  "params": {
    "DeviceName": "huide-iPhone",
    "MacAddress": "a0:99:9b:70:0b:c4"
  },
  "id": "12.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "12.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120301",
    "message": "Set device block failed."
  },
  "id": "12.3"
}
```
- 120301: Set device block failed.
- 120302: Device is not exist.

******************************************************************
#### 3.12.4 SetDeviceUnblock
> Set Device Unblock

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceUnblock",
  "params": {
    "DeviceName": "huide-iPhone",
    "MacAddress": "a0:99:9b:70:0b:c4"
  },
  "id": "12.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "12.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120401",
    "message": "Set device unblock failed."
  },
  "id": "12.4"
}
```
- 120401: Set device unblock failed.
- 120402: Unblock device is not exist.

******************************************************************
#### 3.12.5 SetDeviceName

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceName",
  "params": {
    "DeviceName": "huide-iPhone2",
    "MacAddress": "a0:99:9b:70:0b:c4",
    "DeviceType": 1,
	"ConnectMode": 0
  },
  "id": "12.5"
}
```
- refer 12.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "12.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120501",
    "message": "Set device name failed."
  },
  "id": "12.5"
}
```

******************************************************************
#### 3.12.6 GetDeviceDefaultRight
> Get device Default Right

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetDeviceDefaultRight",
  "params": {},
  "id": "12.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "InternetRight": 1,
    "StorageRight": 1
  },
  "id": "12.6"
}
```

**Params:**

- `InternetRight`: Device default Internet Right
  - 0: disable
  - 1: enable
- `StorageRight`: Device default Storage Right
  - 0: disable
  - 1: enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120601",
    "message": "Get device default right failed."
  },
  "id": "12.6"
}
```

******************************************************************

#### 3.12.7 SetDeviceDefaultRight
> Set device default right

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceDefaultRight",
  "params": {
    "InternetRight": 1,
    "StorageRight": 1
  },
  "id": "12.7"
}
```

**Params:**
- refer to 3.12.6

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "12.7"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120701",
    "message": "Set device default right failed."
  },
  "id": "12.7"
}
```
- 120701: set device default right failed.

******************************************************************
#### 3.12.8 SetConnectedDeviceRight
> Set connected device right

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetConnectedDeviceRight",
  "params": {
    "DeviceName": "huide-iPhone",
    "MacAddress": "a0:99:9b:70:0b:c4",
    "InternetRight": 1,
    "StorageRight": 1
  },
  "id": "12.8"
}
```

**Params:**

- `InternetRight`: Device default Internet Right
  - 0: disable
  - 1: enable
- `StorageRight`: Device default Storage Right
  - 0: disable
  - 1: enable
- `DeviceName`: Device Name
- `MacAddress`: Device mac address

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "12.8"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "120801",
    "message": "Set connected device right failed."
  },
  "id": "12.8"
}
```
- 120801: Set connected device right failed.

****************************************************************************
### 3.13 System
#### 3.13.1 GetSystemInfo
> Get System Info

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSystemInfo",
  "params": {},
  "id": "13.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SwVersion": "HH70_IA_02.00_10",
    "HwVersion": "HH70-V-V1.0",
    "WebUiVersion": "HH70_JRDRESOURCE_IA_05_2078",
    "HttpApiVersion": "TCL-HTTP",
    "AppVersion": "V1.0",
    "DeviceName": "HH70",
    "IMEI": "869486010150315",
    "sn": "",
    "MacAddress": "8c:dc:d4:31:ba:b5",
    "IMSI": "460010322682758",
    "ICCID": "89860116851018021319",
    "MsisdnMark": 1,
    "MSISDN": "8618620322862",
    "SwVersionMain": "HH70_IA_02.00_10",
    "MacAddress5G": "85:55:55:31:ba:b5"
  },
  "id": "13.1"
}
```

**Params:**

- `SwVersion`: Firmware Version of device
- `HwVersion`: Hardware version
- `WebUiVersion`: WEB UI version
- `HttpApiVersion`: Http API Version used by the device
- `AppVersion`:
- `DeviceName`:
- `IMEI`:
- `sn`:
- `MacAddress`:
- `IMSI`:
- `ICCID`:
- `MsisdnMark`:
- `MSISDN`:
- `SwVersionMain`: Main sw version
- `MacAddress5G`: 5GHz wifi mac address

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130101",
    "message": "Get items failed."
  },
  "id": "13.1"
}
```

******************************************************************
#### 3.13.2 SetLanguage
> Set Default Language by key

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetLanguage",
  "params": {
    "Language": "en"
  },
  "id": "13.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130201",
    "message": "set current language setting fail. "
  },
  "id": "13.2"
}
```

******************************************************************
#### 3.13.3 GetCurrentLanguage
> Get Current Language key

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetCurrentLanguage",
  "params": {},
  "id": "13.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "Language": "en"
  },
  "id": "13.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130301",
    "message": "Get current language setting failed."
  },
  "id": "13.3"
}
```

******************************************************************
#### 3.13.4 GetSystemStatus
> Get System status

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSystemStatus",
  "params": {},
  "id": "13.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "NetworkType": 8,
    "NetworkName": "UNICOM",
    "Roaming": 1,
    "Domestic_Roaming": 1,
    "SignalStrength": 3,
    "chg_state": 1,
    "bat_cap": 100,
    "bat_level": 4,
    "ConnectionStatus": 2,
    "Conprofileerror": 0,
    "SmsState": 2,
    "WlanState": 1,
    "curr_num": 0,
    "curr_num_2g": 0,
    "curr_num_5g": 0,
    "TotalConnNum": 1,
    "Ssid_2g": "HH70-459D_2.4GHz",
    "Ssid_5g": "HH70-459D_5GHz",
    "WlanState_2g": 1,
    "WlanState_5g": 1,
    "DeviceUptime":100,
    "cell_lock": 0
  },
  "id": "13.4"
}
```

**Params:**

- `NetworkType`: Network type
  - 0: NO SERVER
  - 1: GPRS
  - 2: EDGE
  - 3: HSPA
  - 4: HSUPA
  - 5: UMTS
  - 6: HSPA+
  - 7: DC-HSPA+
  - 8: LTE
  - 9: LTE+
  - 10: WCDMA
  - 11: CDMA
  - 12: GSM
- `NetworkName`: operator name
- `Roaming`: Roaming state
  - 0: Roaming
  - 1: no
- `Domestic_Roaming`:
  - 0: national roaming
  - 1: International roaming
- `SignalStrength`: RSSI value
  - -1: No service
  - 0: level 0
  - 1: level 1
  - 2: level 2
  - 3: level 3
  - 4: level 4
- `chg_state`: battery change state
  - 0: Charging
  - 1: Charge done
  - 2: Charge remove
  - 3: error occur
  - 4: Charging out for Power Bank
- `bat_cap`: Current battery capacity 0~100
- `bat_level`:
  - 0: Grade 0
  - 1: Grade 1
  - 2: Grade 2
  - 3: Grade 3
  - 4: Grade 4
  - 5: low volt
- `ConnectionStatus`:
  - 0: disconnected
  - 1: connecting
  - 2: connected
  - 3: disconnecting
- `Conprofileerror`: profile error code
  - 0: No error
  - 1: APN Error
  - 2: Pdp error
- `SmsState`:
  - 0: no SMS
  - 1: SMS full
  - 2: Noral
  - 3: New SMS
  - WEBS_SMS_REDIRECTING 这种状态需要添加
- `WlanState`: WiFi State
  - 0: off
  - 1: on
  - 2: WPS
- `curr_num`: Current WIFI client
- `curr_num_2g`: Current 2.4GHz WIFI client
- `curr_num_5g`: Current 5GHz WIFI client
- `Ssid_2g`: Current 2.4GHz WIFI ssid
- `Ssid_5g`: Current 5GHz WIFI ssid
- `WlanState_2g`: Current 2.4GHz WIFI State
  - 0: off
  - 1: on
  - 2: WPS
- `WlanState_5g`: Current 5GHz WIFI State
  - 0: off
  - 1: on
  - 2: WPS
- `TotalConnNum`: The total connected device number, USB and WiFi
- `UsbStatus`: usb status
  - 0: Not Insert
  - 1: USB storage
  - 2: USB print
- `UsbName`: USB disk name
- `DeviceUptime`: device running  time in seconds
- `cell_lock`: distance
  - 0: out of zone 
  - 1: in zone
  - 2: null (no definition)

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130401",
    "message": "Get system Status fail."
  },
  "id": "13.4"
}
```

******************************************************************
#### 3.13.5 SetDeviceReboot
> reboot

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceReboot",
  "params": {},
  "id": "13.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130501",
    "message": "Set device reboot failed."
  },
  "id": "13.5"
}
```

******************************************************************
#### 3.13.6 SetDeviceReset
> reset

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceReset",
  "params": {},
  "id": "13.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.6"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130601",
    "message": "Set device reset failed."
  },
  "id": "13.6"
}
```

******************************************************************
#### 3.13.7 SetDeviceBackup
> backup configure

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDeviceBackup",
  "params": {},
  "id": "13.7"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.7"
}
```

!> 返回成功之后，FW会生成一个备份文件，此时再去请求地址`/cfgbak/configure.bin`即可下载到备份文件

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130701",
    "message": "Set device back up failed."
  },
  "id": "13.7"
}
```
******************************************************************
#### 3.13.9 ~~SetDevicePowerOff~~
>Power off the device

**Request:**
```
{
  "jsonrpc": "2.0", 
  "method": "SetDevicePowerOff",
  "params":{},
  "id": "13.9"
}
```

**Response:**
```
{
  "jsonrpc": "2.0", 
  "result": {},
  "id": "13.9"，
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "130901",
    "message": "Set device power off failed."
  },
  "id": "13.9"
}
```

******************************************************************
#### 3.13.16 GetUpnpSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetUpnpSettings",
  "params": {},
  "id": "13.16"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "upnp_switch": 1
  },
  "id": "13.16"
}
```

**Params:**
- `upnp_switch`
  - 0: disable
  - 1: enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "1316401",
    "message": "Get UPNP settings fail. "
  },
  "id": "13.16"
}
```

******************************************************************
#### 3.13.17 SetUpnpSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetUpnpSettings",
  "params": {
    "upnp_switch": 0
  },
  "id": "13.17"
}
```

**Params:**
- refer to 3.13.16

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.17"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "131701",
    "message": "Set UPNP settings failed. "
  },
  "id": "13.17"
}
```

******************************************************************
#### 3.13.19 uploadBackupSettings
> upload and restore backup settings

`URL:/goform/uploadBackupSettings`

**Request:**
```
Content-Disposition: form-data; 
name="iptUpload"; 
filename="configure.bin"
Content-Type: application/octet-stream
```

**Response:**
```
{
"error": "0"
}
```

**Response Error:**
```
{
  "error": "1"
}
```
- 0: success
- 1: failed
- 2: call API wrong
- 3: UI parameter wrong
- 4: data too long, no memory to use

****************************************************************
#### 3.13.20 GetCurrentTime  
> Get Current Time and timezone

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetCurrentTime",
  "params": {},
  "id": "13.20"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "CurrTime": "2015-01-20 01:17:16",
      "TimeZone": "NFT-11:30",
      "ZoneName": "Pacific/Norfolk"
  },
  "id": "13.20"
}
```

**Params:**

- `CurrTime`: Current time
- `TimeZone`: Current time zone 
- `ZoneName`: Current time zone name

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "132001",
    "message": "Get Current Time and timezone failed."
  },
  "id": "13.20"
}
```

****************************************************************
#### 3.13.21 SetCurrentTime 

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetCurrentTime",
  "params": {
    "TimeZone":"NFT-11:30",
    "ZoneName": "Pacific/Norfolk"
  },
  "id": "13.21"
}
```

**Params:**

- refer to 3.13.20

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.21"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "132101",
    "message": "Set Current Time and timezone failed."
  },
  "id": "13.21"
}
```

****************************************************************
#### 3.13.22 GetSystemSettings
> Get System Settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSystemSettings",
  "params": {},
  "id": "13.22"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "AntennaSwitch": 1,
    "NtpServer1": "192.168.9.12",
    "NtpServer2": "192.168.9.13"
  },
  "id": "13.22"
}
```

**Params:**

- `NtpServer1`: NTP Server 1 ip address
- `NtpServer2`: NTP Server 2 ip address
- `AntennaSwitch`: 
  - 0: External
  - 1: Internal

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "132201",
    "message": "Get System Settings failed."
  },
  "id": "13.22"
}
```

****************************************************************
#### 3.13.23 SetSystemSettings 

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetSystemSettings",
  "params": {
    "AntennaSwitch": 1,
    "NtpServer1": "192.168.9.12",
    "NtpServer2": "192.168.9.13"
  },
  "id": "13.23"
}
```

**Params:**

- refer to 3.13.22

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "13.23"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "132301",
    "message": "Set System Settings failed."
  },
  "id": "13.23"
}
```

************************************************************************
### 3.14 Sharing
#### 3.14.1 GetDLNASettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetDLNASettings",
  "params": {},
  "id": "14.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "DlnaStatus": 1,
    "DlnaName": "DLNA Server"
  },
  "id": "14.1"
}
```

**Params:**
- `DlnaStatus`
  - 0: disable
  - 1: enable
- `DlnaName`: Name of dlna server

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "1401401",
    "message": "Get DLNA settings fail. "
  },
  "id": "14.1"
}
```

******************************************************************
#### 3.14.2 SetDLNASettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDLNASettings",
  "params": {
    "DlnaStatus": 1,
    "DlnaName": "DLNA Server"
  },
  "id": "14.2"
}
```

**Params:**
- refer to 3.14.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "14.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "140201",
    "message": "Set DLNA settings failed. "
  },
  "id": "14.2"
}
```

******************************************************************
#### 3.14.3 GetSambaSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetSambaSettings",
  "params": {},
  "id": "14.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SambaStatus": 1,
    "Anonymous":0,
    "AuthType":0 
  },
  "id": "14.3"
}
```

**Params:**
- `SambaStatus`
  - 0: disable
  - 1: enable
- `Anonymous`: Whether allowing anonymous user to login
  - 0: disable
  - 1: enable
- `AuthType`: The auth type of sharing
  - 0: ReadOnly
  - 1: ReadWrite

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "1403401",
    "message": "Get Samba settings fail. "
  },
  "id": "14.3"
}
```

******************************************************************
#### 3.14.4 SetSambaSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetSambaSettings",
  "params": {
    "SambaStatus": 1,
    "Anonymous":0,
    "AuthType":0 
  },
  "id": "14.4"
}
```

**Params:**
- refer to 3.14.3

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "14.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "140401",
    "message": "Set Samba settings failed. "
  },
  "id": "14.4"
}
```

******************************************************************
#### 3.14.5 GetFtpSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetFtpSettings",
  "params": {},
  "id": "14.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "FtpStatus": 1,
    "Anonymous":0,
    "AuthType":0 
  },
  "id": "14.5"
}
```

**Params:**
- `FtpStatus`
  - 0: disable
  - 1: enable
- `Anonymous`: Whether allowing anonymous user to login
  - 0: disable
  - 1: enable
- `AuthType`: The auth type of sharing
  - 0: ReadOnly
  - 1: ReadWrite

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "1405401",
    "message": "Get Ftp settings fail. "
  },
  "id": "14.5"
}
```

******************************************************************
#### 3.14.6 SetFtpSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetFtpSettings",
  "params": {
    "FtpStatus": 0,
    "Anonymous":0,
    "AuthType":0 
  },
  "id": "14.6"
}
```

**Params:**
- refer to 3.14.5

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "14.6"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "140601",
    "message": "Set Ftp settings failed. "
  },
  "id": "14.6"
}
```

************************************************************************
### 3.15 Profile
#### 3.15.1 GetProfileList
> Get Profile list

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetProfileList",
  "params": {},
  "id": "15.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
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
  "id": "15.1"
}
```

**Params:**

- `ProfileList`: Array | profile list
- `ProfileID`: Number | Profile index
- `ProfileName`: String | profile name
- `APN`: String | apn name
- `UserName`: String | profile UserName
- `Password`: String | profile Password
- `DailNumber`: String | Dail Number
- `AuthType`: Number | Auth type
  - 0: None
  - 1: PAP
  - 2: CHAP
  - 3: PAP& CHAP
- `Default`: Number | Current Default profile
  - 0: not Default
  - 1: Default
- `IsPredefine`: Number | Is predefine or user create profile
  - 0: Predefine profile; cannot modify or delete
  - 1: User Create profile
- `IPAdrress`: String | Ip Adrress If empty the dynamic IP,else static IP
- `PdpType`: `Number` |
  - 0:IPV4
  - 1:IPV6
  - 2:IPV4V6
- `data_len`: Number | profile length

- `PdpType`: 现在底层代码中0:IPV4	1:PPP	2:IPV6	3:IPV4V6    PPP在mw70项目中没有用到	

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "150101",
    "message": "Get profile listfailed."
  },
  "id": "15.1"
}
```

*****************************************************************
#### 3.15.2 AddNewProfile
> Add Profile

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "AddNewProfile",
  "params": {
    "ProfileName": "names8",
    "APN": "3213",
    "UserName": "23112",
    "Password": "3123123",
    "AuthType": 0,
    "DailNumber": "*99#",
    "IPAdrress": "",//Options
    "PdpType": null//Options
  },
  "id": "15.2"
}
```

**Params:**

- refer to 3.15.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "15.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "150201",
    "message": "Add newprofile failed."
  },
  "id": "15.2"
}
```

*****************************************************************
#### 3.15.3 EditProfile
> Edit Profile

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "EditProfile",
  "params": {
    "ProfileID": 3,
    "ProfileName": "names8",
    "APN": "123456",
    "UserName": "23112",
    "Password": "3123123",
    "AuthType": 0,
    "DailNumber": "*99#",
    "IPAdrress": "",
    "PdpType": null
  },
  "id": "15.3"
}
```

**Params:**

- refer to 3.15.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "15.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "150301",
    "message": "edit profile failed."
  },
  "id": "15.3"
}
```
- 150301: edit profile failed.
- 150302: Profile is not exit.

*****************************************************************
#### 3.15.4 DeleteProfile
> Delete Profile by profile ID

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "DeleteProfile",
  "params": {
    "ProfileID": 3
  },
  "id": "15.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "15.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "150401",
    "message": "delete profile failed."
  },
  "id": "15.4"
}
```
- 150401: Delete profile failed.
- 150402: Profile is not exit.

*****************************************************************
#### 3.15.5 SetDefaultProfile
> Set Default Profile by profile ID
- when connection status is connecting or connected,can not be set default

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDefaultProfile",
  "params": {
    "ProfileID": 3
  },
  "id": "15.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "15.5"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "150501",
    "message": "Set default profile failed."
  },
  "id": "15.5"
}
```
- 150501: Set default profile failed.
- 150502: Profile is not exit.

*****************************************************************
#### 3.15.6 ~~getCurrentProfile~~
> Get current connected profile info

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "getCurrentProfile",
  "params": {},
  "id": "15.6"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ProfileID": 1,
    "IsPredefine": 0,
    "AuthType": -1,
    "ProfileName": "China Unicom",
    "UserName": "",
    "DailNumber": "*99#",
    "Password": "",
    "APN": "3GNET",
    "PdpType": -1,
    "IPAdrress": ""
  },
  "id": "15.6"
}
```

**Params:**

- refer to 3.15.1

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "150601",
    "message": "get connected profile error"
  },
  "id": "15.6"
}
```

*************************************************************************
### 3.16 ~~Power Management~~
#### 3.16.1 ~~GetBatteryState~~

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetBatteryState",
  "params": {},
  "id": "16.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "chg_state": 1,
    "bat_cap": 100,
    "bat_level": 4,
    "BatteryLevel": 100
  },
  "id": "16.1"
}
```

**Params:**

- `chg_state`:
  - 0: Charging
  - 1: Charge done
  - 2: Charge remove
  - 3: error occur
  - 4: Charging out for Power Bank
- `bat_cap`:
- `bat_level`:
- `BatteryLevel`:BatteryLevel  (Min: 1 Max:100)

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "160101",
    "message": "Get battery state failed."
  },
  "id": "16.1"
}
```

****************************************************************
#### 3.16.2 ~~GetPowerSavingMode~~

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetPowerSavingMode",
  "params": {},
  "id": "16.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "SmartMode": 0,
    "WiFiMode": 0,
    "ConnAutoOff": 1
  },
  "id": "16.2"
}
```

**Params:**

- `SmartMode`:
  - 0: disable;
  - 1: enable
- `WiFiMode`:
  - 0: disable
  - 1: enable
- `ConnAutoOff`:
  - 0: disable
  - 1: enable

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "160201",
    "message": "Get power saving mode failed."
  },
  "id": "16.2"
}
```

****************************************************************
#### 3.16.3 ~~SetPowerSavingMode~~

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetPowerSavingMode",
  "params": {
    "SmartMode": 0,
    "WiFiMode": 0,
    "ConnAutoOff": 1
  },
  "id": "16.3"
}
```

**Params:**

- refer to `5.16.2`

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "16.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "160301",
    "message": "Set power saving mode failed."
  },
  "id": "16.3"
}
```

************************************************************************
### 3.17 WIFI Extender
#### 3.17.1 GetWIFIExtenderSettings

> 当状态StationEnable为1即开启时，开机或者网络变化时底层需要自动触发一下搜索周围wifi的流程

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "GetWIFIExtenderSettings",
  "params": {},
  "id": "17.1"
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {
    "StationEnable": 0,
    "ExtenderInitingStatus":0
  },
  "id": "17.1"
}
```

**Params:**

- `StationEnable`: 
  - 0: disable
  - 1: enable
- `ExtenderInitingStatus`: 
  - 0:Initing
  - 1:Complete
  - 2:Inited Failed


**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170101",
    "message": "Get WIFI Extender Settings failed."
  },
  "id": "17.1"
}
```

****************************************************************

#### 3.17.2 SetWIFIExtenderSettings

> 当状态StationEnable为1即开启时，底层需要自动触发一次搜网流程

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "SetWIFIExtenderSettings",
  "params": {
    "StationEnable": 0
  },
  "id": "17.2"
}
```

**Params:**

- `StationEnable`: 
  - 0: disable
  - 1: enable

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.2"
}
```

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170201",
    "message": "Set WIFI Extender Settings failed."
  },
  "id": "17.2"
}
```

****************************************************************

#### 3.17.3 GetWIFIExtenderCurrentStatus

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "GetWIFIExtenderCurrentStatus",
  "params": {},
  "id": "17.3"
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {
    "HotspotConnectStatus": 0,
    "HotspotSSID":"",
    "Signal":1,
    "IPV4Addr":"10.125.52.2",
    "IPV6Addr":""
  },
  "id": "17.3"
}
```

**Params:**

- `HotspotConnectStatus`: 
  - 0: disconnected
  - 1: connecting
  - 2: connected
- `HotspotSSID`: The connected hotspot SSID, if no hotspot connected
- `Signal`: the signal of connected ssid
  - 0~4
- `IPV4Addr`: IPV4 address
- `IPV6Addr`: IPV6 address

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170301",
    "message": "Get WIFI Extender Current Status failed."
  },
  "id": "17.3"
}
```

****************************************************************

#### 3.17.4 GetHotspotList

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "GetHotspotList",
  "params": {},
  "id": "17.4"
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {
    "Status":0,
    "HotspotList" ：[
      {
        "HotspotId":"1234567890123456",
        "ConnectState":0,
        "SSID":"MW120-123",
        "Signal":6,
        "SecurityMode":0,
        "IsSave":0
      },
      {
        "HotspotId":"1234567890123456",
        "ConnectState":0,
        "SSID":"MW70-123",
        "Signal":2,
        "SecurityMode":0,
        "IsSave":1
      }
    ]
  },
  "id": "17.4"
}
```

**Params:**

- `Status`: wifi search status
  - 0: none
  - 1: searching
  - 2: completed
- `HotspotId`: The only flag that stored hotspot list info.
- `ConnectState`:The hotspot current status
  - 0: disconnected
  - 1: connecting
  - 2: connected
- `SSID`: SSID name,
- `Signal`: the signal of connected ssid
  - 0~4
- `SecurityMode`: 加密类型
  - 0:No Security
  - 1:WEP
  - 2:WPA
  - 3: WPA2
  - 4: WPA/WPA2

- `IsSave`: 之前是否保存过密码
  - 0: 没有保存
  - 1: 已保存

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170401",
    "message": "Get Current Time and timezone failed."
  },
  "id": "17.4"
}
```

****************************************************************

#### 3.17.5 SearchHotspot

> 触发搜索操作，之后ui调用GetHotspotList查询wifi列表

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "SearchHotspot",
  "params": {},
  "id": "17.5"
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.5"
}
```

**Params:**

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170501",
    "message": "Get Current Time and timezone failed."
  },
  "id": "17.5"
}
```

****************************************************************


#### 3.17.6 ConnectHotspot

> 通过HotspotId触发连接wifi功能，触发成功之后，UI调用接口GetConnectHotspotState查询连接状态

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "ConnectHotspot",
  "params": {
    "HotspotId":"1234567890123456",
    "SSID":"SSID Name",
    "SecurityMode":0,
    "Key":"12345678",
    "Hidden":0
  },
  "id": "17.6"
}
```

**Params:**
- `HotspotId`: The only flag that stored hotspot list info.
- `SSID`: SSID name
- `SecurityMode`: 加密类型
  - 0:No Security
  - 1:WEP
  - 2:WPA
  - 3: WPA2
  - 4: WPA/WPA2
- `Key`: The Hotspot key.
- `Hidden`:是否是隐藏SSID
  - 0：非隐藏SSID
  - 1：隐藏的SSID

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.6"
}
```

**Params:**

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170601",
    "message": "Connect Hotspot failed."
  },
  "id": "17.6"
}
```
****************************************************************


#### 3.17.7 GetConnectHotspotState

> 查询连接结果，当连接成功时，FW自动更新wifi列表

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "GetConnectHotspotState",
  "params": {},
  "id": "17.7"
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {
    "State":0
  },
  "id": "17.7"
}
```

**Params:**
- `State`:
  - 0: none
  - 1: connecting
  - 2: success
  - 3: password error
  - 4: need password
  - 5: fail
  - 6: open 确认,有些ap从有加密改为了open的,需要用户确认才能连接


**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170601",
    "message": "Get Connect Hotspot State failed."
  },
  "id": "17.7"
}
```

****************************************************************

#### ~~3.17.8 EnterHotspotPassword~~

> 此接口废弃，使用3.17.6 ConnectHotspot替代

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "EnterHotspotPassword",
  "params": {
    "HotspotId":"1234567890123456",
    "SSID":"SSID Name",
    "Key":"12345678"
  },
  "id": "17.8"
}
```
**Params:**
- `HotspotId`: The only flag that stored hotspot list info.
- `SSID`: SSID name
- `Key`: The Hotspot key.

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.8"
}
```

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170801",
    "message": "Enter Hotspot Password failed."
  },
  "id": "17.8"
}
```
****************************************************************

#### 3.17.9 DisConnectHotspot

> 断开 wifi Hotspot，FW需要更新Wifi列表

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "DisConnectHotspot",
  "params": {},
  "id": "17.9"
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.9"
}
```

**Params:**

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "170901",
    "message": "DisConnect Hotspot failed."
  },
  "id": "17.9"
}
```
****************************************************************

#### 3.17.10 ForgetHotspotPassword

> 忘记密码，FW更新列表，如果忘记秘密的SSID为隐藏的，则该SSID从列表中删除

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "ForgetHotspotPassword",
  "params": {
    "HotspotId":"1234567890123456",
    "SSID":"MW7012345"
  },
  "id": "17.10"
}
```
**Params:**
- `HotspotId`: The only flag that stored hotspot list info.

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.10"
}
```

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "171001",
    "message": "Connect Hotspot failed."
  },
  "id": "17.10"
}
```
****************************************************************


#### 3.17.11 AddHotspot

> 用于添加隐藏的SSID，调用此接口会触发连接操作，UI查询GetConnectHotspotState，当查询完成时，FW自动更新wifi列表

**Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "AddHotspot",
  "params": {
    "HotspotId": "",
    "SSID":"hidden SSID Name",
    "Key":"12345678"
    "SecurityMode":0,
    "Hidden": 1

    
    
  },
  "id": "17.11"
}
```
**Params:**
- `HotspotId`: The only flag that stored hotspot list info.
- `SSID`: SSID name
- `Key`: The Hotspot key.
- `SecurityMode`: 加密类型
  - 0:No Security
  - 1:WEP
  - 2:WPA
  - 3: WPA2
  - 4: WPA/WPA2
- `Hidden`:是否是隐藏SSID
  - 0：非隐藏SSID
  - 1：隐藏的SSID

**Response:**
```json
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "17.11"
}
```

**Response Error:**
```json
{
  "jsonrpc": "2.0",
  "error": {
    "code": "171101",
    "message": "add hidden Hotspot failed."
  },
  "id": "17.11"
}
```
****************************************************************



### 3.18 ~~OMA~~

****************************************************************
### 3.19 TR069
#### 3.19.1 GetClientConfiguration

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetClientConfiguration",
  "params": {},
  "id": "19.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "AcsUrl": "",
    "AcsUserName":"" ,
    "AcsUserPassword": "",
    "ConReqAuthent":1,
    "ConReqUserName": "",
    "ConReqUserPassword": "",
    "Inform":1,
    "InformInterval": 60,
    "State":0
  },
  "id": "19.1"
}
```

**Params:**

- `AcsUrl`: Acs Url
- `AcsUserName`: Acs User Name
- `AcsUserPassword`: Acs User Password
- `ConReqAuthent`:
  - 0: disable
  - 1: enable
- `ConReqUserName`: Connection Request User Name
- `ConReqUserPassword`: Connection Request User Password
- `Inform`:
  - 0: disable
  - 1: enable  
- `InformInterval`: Inform Interval(s)
- `State`:Tr069 status switch  
  - 0: disable
  - 1: enable  

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "190101",
    "message": "Get client configuration failed."
  },
  "id": "19.1"
}
```

****************************************************************
#### 3.19.2 SetClientConfiguration

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetClientConfiguration",
  "params": {
    "AcsUrl": "",
    "AcsUserName":"" ,
    "AcsUserPassword": "",
    "ConReqAuthent":1,
    "ConReqUserName": "",
    "ConReqUserPassword": "",
    "Inform":1,
    "InformInterval": 60,
    "State":0
  },
  "id": "19.2"
}
```

**Params:**

- refer to 3.19.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "19.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "190201",
    "message": "Set client configuration failed."
  },
  "id": "19.2"
}
```

****************************************************************
### 3.20  Qos
#### 3.20.1  GetQosSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetQosSettings",
  "params": {},
  "id": "20.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "State": 1,
      "PrioritizeType": 0,
      "UserUpBand": 129,
      "UserDownBand": 1024,
      "QosList": [{
          "Id": 1,
          "Priority": 1,
          "SrcIPAddress": "192.168.1.10",
          "DstIPAddress": "192.168.1.12",
          "Protocol": 1,
          "Port": "8080",
          "Service": 1
      }, …]
  },
  "id": "20.1"
}
```

**Params:**

- `State`: Qos state
  - 0: disable
  - 1: enable
- `PrioritizeType`: Qos PrioritizeType
  - 0: for auto
  - 1: for WEB first
  - 2: for GAME first
  - 3: for VIDEO first
- `UserUpBand`: Qos User UpBand speed
- `UserDownBand`: Qos User DownBand speed   
- `Id`: The only flag of the record
- `Priority `: 
  - 0: Express
  - 1: High
  - 2: Normal
  - 3: Low
- `Protocol `: 
  - 0: ALL
  - 1: TCP
  - 2: UDP
  - 3: ICMP
- `SrcIPAddress`: The source IP address that set QoS.
- `DstIPAddress`: The destination address that set QoS rule.
- `Port`: The Port that set QoS, split with , if Port =""，means ALL.
- `Service`: The QoS service value
  - 0:All
  - 1: ICQ
  - 2: BitTorrent 
  - 3: eMule
  - 4: FastTrack
  - 5: FTP
  - 6: Gnutella
  - 7: HTTP
  - 8: Ident
  - 9: IRC
  - 10: Jabber
  - 11: MSN
  - 12: NTP
  - 13: POP3
  - 14: SMTP
  - 15：SSL
  - 16：VNC

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
      "code": "200101",
      "message": "Get QoS Settings failed."
  },
  "id": "20.1"
}
```

****************************************************************
#### 3.20.2  SetQosSettings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetQosSettings",
  "params": {
      "State": 1,
      "PrioritizeType": 0,
      "UserUpBand": 129,
      "UserDownBand": 1024,
      "QosList": [{
          "Id": 1,
          "Priority": 1,
          "SrcIPAddress": "192.168.1.10",
          "DstIPAddress": "192.168.1.12",
          "Protocol": 1,
          "Port": "8080",
          "Service": 1
      }, …]
  },
  "id": "20.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "20.2"
}
```

**Params:**

- refer to 3.20.1

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "200201",
    "message": "Set QoS Settings failed."
  },
  "id": "20.2"
}
```

****************************************************************
### 3.21  RoutingRules
#### 3.21.1  GetStaticRouting

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetStaticRouting",
  "params": {},
  "id": "21.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "State": 1,
      "StaticRoutingList": [{
          "Id":1, 
          "DestNetAddr": "201.19.10.123" ,
          "DestNetmask": "255.255.255.0",
          "GateWay": "192.168.1.1",
          "SourceNetAddr": "192.168.1.22",
          "SourceNetmask": "255.255.0.0",
          "Interface": 1,
          "Metric": 0,
          "MTU": 1500，
          "Type": 0
      }, …]
  },
  "id": "21.1"
}
```

**Params:**

- `State`: RoutingRules state
  - 0: disable
  - 1: enable
- `Id`: The only flag of the record
- `DestNetAddr`: The destination IP address that the rule set.
- `DestNetmask `: The desination netmask.
- `GateWay`: The device Gateway.
- `SourceNetAddr`: The source network IP address.
- `SourceNetmask`: The netmask of the source network IP address.
- `Interface`: 
  - 0: wan
  - 1: lan
- `MTU`: The maximum Transmission Unit  that the rules set.
- `Type`: 
  - 0: Default
  - 1: Subnet
  - 2: Host
- `Metric`: 

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
      "code": "210101",
      "message": "Get Static Routing rules list failed."
  },
  "id": "21.1"
}
```

****************************************************************
#### 3.21.2 SetStaticRouting

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetStaticRouting",
  "params": {
      "State": 1,
      "StaticRoutingList": [{
          "Id":1, 
          "DestNetAddr": "201.19.10.123" ,
          "DestNetmask": "255.255.255.0",
          "GateWay": "192.168.1.1",
          "SourceNetAddr": "192.168.1.22",
          "SourceNetmask": "255.255.0.0",
          "Interface": 1,
          "Metric": 0,
          "MTU": 1500，
          "Type": 0
      }, …]
  },
  "id": "21.2"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "21.2"
}
```

**Params:**

- refer to 3.21.1

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "210201",
    "message": "Set Static Routing rules failed."
  },
  "id": "21.2"
}
```

****************************************************************
#### 3.21.3  GetDynamicRouting

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetDynamicRouting",
  "params": {},
  "id": "21.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "RipState": 1,
      "Operation": 1,
      "RipVerion": 0
  },
  "id": "21.3"
}
```

**Params:**

- `RipState`: 
  - 0: disable
  - 1: enable
- `Operation`: 
  - 0: disactive
  - 1: active
- `RipVerion`: 
  - 0: Rip V1&Rip V2
  - 1: Rip V1
  - 2: Rip V2

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
      "code": "210301",
      "message": "Get Dynamic Routing rules failed."
  },
  "id": "21.3"
}
```

****************************************************************
#### 3.21.4 SetDynamicRouting

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetDynamicRouting",
  "params": {
      "RipState": 1,
      "Operation": 1,
      "RipVerion": 0
  },
  "id": "21.4"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "21.4"
}
```

**Params:**

- refer to 3.21.3

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "210401",
    "message": "Set Dynamic Routing rules failed."
  },
  "id": "21.4"
}
```

*****************************************************************
### 3.22 CallLog
#### 3.22.1 GetCallLogList
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetCallLogList",
  "params": {
    "ListType": 0,
    "Page": 1
  },
  "id": "22.1"
}
```

**Params:**

- `ListType`: 
  - 0: All call log list
  - 1: Incoming list
  - 2: Outgoing list
  - 3: Missed list

- `Page`: Pages that call log list separate
  - 0: return all list.
  - 1: the first page ,every page has 10 calllog list.
  - 2: The secord page.

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "CallLogList": [
      {
        "Id": 10,
        "TelNumber": "1380013800",
        "TelName": "John",
        "Date": "2017-04-25 14:19",
        "Duration": 180,
        "CallLogType": 1
      }
    ],
    "Page": 0,
    "TotalPageCount": 1
  },
  "id": "22.1"
}
```

**Params:**

- `CallLogList`: Call Log List
- `Id`: The list ID.
- `TelNumber`: Telephone number
- `TelName`: Phone book name, Reserved this filed
- `Date`: Call log time in seconds: The time as the number of seconds since the Epoch, 1970-01-01 00:00:00 +0000 (UTC)
- `Duration`: Call duration time in seconds
- `CallLogType`:
  - 1: in call log
  - 2: out call log
  - 3: missed call log
- `Page`: Pages that call log list separate
  - 0: return all list.
  - 1: the first page ,every page has 10 calllog list.
  - 2: The secord page.
- `TogalPageCount`: Total page need to show.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "220101",
    "message": "Get call log list failed"
  },
  "id": "22.1"
}
```

****************************************************************
#### 3.22.2 DeleteCallLog
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "DeleteCallLog",
  "params": {
    "Id": [1,2],
    "ListType":0
  },
  "id": "22.2"
}
```
**Params:**

- `Id`: Call log index array.
- `ListType`: 
  - 0: All call log list
  - 1: Incoming list
  - 2: Outgoing list
  - 3: Missed list


**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "22.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "220201",
    "message": "Delete call log failed."
  },
  "id": "22.2"
}
```

****************************************************************
#### 3.22.3 ~~ClearCallLog~~
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "ClearCallLog",
  "params": {
    "ListType": 1
  },
  "id": "22.3"
}
```
**Params:**

- `ListType`: 
  - 0: All call log
  - 1: in call log
  - 2: out call log
  - 3: missed call log

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "22.3"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "220301",
    "message": "Clear call log failed."
  },
  "id": "22.3"
}
```

****************************************************************
#### 3.22.4 GetCallLogCountInfo
**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetCallLogCountInfo",
  "params": {},
  "id": "22.4"
}
``` 

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "MaxCallLogCount": 100,
    "IncomingCallUsed": 20,
    "OutgoingCallUsed": 15,
    "MissedCallUsed": 30,
    "TotalUsedCount":65
  },
  "id": "22.4"
}
```

**Params:**

- `MaxCallLogCount`: Call Logs the maximum amount of storage.
- `IncomingCallUsed`: Incoming calls have been used count.
- `OutgoingCallUsed`: Outgoing calls have been used count.
- `MissedCallUsed`: missed calls have been used count.
- `TotalUsedCount`: Incoming、Outgoning、Missed total used counts.

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "220401",
    "message": "Get call log storage infomation failed."
  },
  "id": "22.4"
}
```

****************************************************************
### 3.23 WAN
#### 3.23.1 GetWanSettings
> Get Wan Settings

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWanSettings",
  "params": {},
  "id": "23.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "SubNetMask": "255.255.255.0",
      "Gateway": "192.168.1.1",
      "IpAddress": "192.168.1.120",
      "Mtu": 1500,
      "ConnectType": 0,
      "PrimaryDNS": "202.201.23.01",
      "SecondaryDNS": "202.201.23.01",
      "Account": "sz13234@163gd.com",
      "Password": "123456",
      "Status": 0,
      "StaticIpAddress":"10.128.208.150",
      "pppoeMtu": 1492,
      "DurationTime": 100,
      "WanType": "eth0"
  },
  "id": "23.1"
}
```

**Params:**

- `SubNetMask`: 
- `Gateway`:
- `Mtu`:
- `IpAddress`:
- `ConnectType`:
  - 0: pppoe
  - 1: dhcp
  - 2: static
- `PrimaryDNS`:
- `SecondaryDNS`:
- `Account`:
- `Password`: 
- `Status`:
  - 0: disconnected
  - 1: connecting
  - 2: connected
  - 3: disconnecting
- `StaticIpAddress`: static IP address
- `pppoeMtu`: PPPoE MTU size(in bytes) value, default value is 1492
- `DurationTime` wan internet connected time in seconds
- `WanType` Wan hardware connection type "usb0" or "eth0"

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "230101",
    "message": "Get Wan Settings failed."
  },
  "id": "23.1"
}
```

****************************************************************
#### 3.23.2 SetWanSettings 

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWanSettings",
  "params": {
    "SubNetMask": "255.255.255.0",
    "Gateway": "192.168.1.1",
    "IpAddress": "192.168.1.120",
    "Mtu": 1500,
    "ConnectType": 0,
    "PrimaryDNS": "202.201.23.01",
    "SecondaryDNS": "202.201.23.01",
    "Account": "sz13234@163gd.com",
    "Password": "123456",
    "Status": 0,
    "StaticIpAddress":"10.128.208.150",
    "pppoeMtu": 1492
  },
  "id": "23.2"
}
```

**Params:**

- refer to 3.23.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "23.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "230201",
    "message": "Set Wan settings failed."
  },
  "id": "23.2"
}
```

****************************************************************
#### 3.23.3 GetWanCurrentMacAddr
> Get Wan Current Mac Address

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWanCurrentMacAddr",
  "params": {},
  "id": "23.3"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "MacAddr": "AA:BB:CC:DD:EE:FF",
    "HostMacAddr": "BB:BB:CC:DD:EE:FF"
  },
  "id": "23.3"
}
```

**Params:**

- `MacAddr`: Wan current mac adress
- `HostMacAddr`: Host mac adress

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "230301",
    "message": "Get Mac address failed."
  },
  "id": "23.3"
}
```

****************************************************************
#### 3.23.4 SetWanCurrentMacAddr 

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetWanCurrentMacAddr",
  "params": {
    "Type": 0,
    "MacAddr": "AA:BB:CC:DD:EE:FF"
  },
  "id": "23.4"
}
```

**Params:**

- `Type`: type
  - 0: set mac address
  - 1: restore mac address
- `MacAddr`: Wan current mac adress


**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "23.4"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "230401",
    "message": "Set Mac address failed."
  },
  "id": "23.4"
}
```

****************************************************************
#### 3.23.5 GetWanIsConnInter
> Get Wan internet connection status

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetWanIsConnInter",
  "params": {},
  "id": "23.5"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "ConnToInterStatus": 0
  },
  "id": "23.5"
}
```

**Params:**

- `ConnToInterStatus`: Internet connection status 
  - 0: could not connect to the internet
  - 2: connected to the internet

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "230501",
    "message": "Get connect to the internet status failed."
  },
  "id": "23.5"
}
```
****************************************************************
### 3.24 Advanced
#### 3.24.1 GetActivePicopoint
> Get Active Picopoint

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "GetActivePicopoint",
  "params": {},
  "id": "24.1"
}
```

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {
      "Nashid": "255.255.255.0",
      "Ssid": "WebPocket-BAB5",
      "UamSecret": "192.168.1.120",
      "UamServer": "192.168.1.120",
      "UamPort": "90",
      "UamAliasName": "admin"
  },
  "id": "24.1"
}
```

**Params:**

- `Nashid`: 
- `Ssid`:
- `UamSecret`:
- `UamServer`:
- `UamPort`:
- `UamAliasName`:


**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "240101",
    "message": "Get Active Picopoint failed."
  },
  "id": "24.1"
}
```

****************************************************************
#### 3.24.2 SetActivePicopoint 

**Request:**
```
{
  "jsonrpc": "2.0",
  "method": "SetActivePicopoint",
  "params": {
     "Nashid": "255.255.255.0",
      "Ssid": "WebPocket-BAB5",
      "UamSecret": "192.168.1.110",
      "UamServer": "192.168.1.120",
      "UamPort": "90",
      "UamAliasName": "admin"
  },
  "id": "24.2"
}
```

**Params:**

- refer to 3.24.1

**Response:**
```
{
  "jsonrpc": "2.0",
  "result": {},
  "id": "24.2"
}
```

**Response Error:**
```
{
  "jsonrpc": "2.0",
  "error": {
    "code": "240201",
    "message": "Set Active Picopoint failed."
  },
  "id": "24.2"
}
```