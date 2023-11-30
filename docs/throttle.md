---
outline: [2, 3]
---

# Throttle

These events relate to controlling various aspects of locomotives, from speed to track power.

## Server to client events

### `throttle/speedUpdate` <badge type="info" text="Update"/>

::: info Parameters

-   `identifier` <badge type="info" text="string | number"/> - Either the name or id of the loco
-   `speed` <badge type="info" text="number"/> - The new speed that has been set
-   `socketID` <badge type="info" text="string"/> - The id of the socket that the [`throttle/setSpeed`](#throttle-setspeed) originated from

**Response to:** [`throttle/setSpeed`](#throttle-setspeed)
:::
Used to inform the client that a loco's speed has changed. It's recommended to compare socketID to the ID of the client's socket and ignore any updates where these match as this means the message originated from the client. This prevents problems occurring due to the slight delay of the server, especially if a slider is being used for speed.
If the update originated due to an event other than `throttle/setSpeed` then `socketID` will be a blank string.

### `throttle/directionUpdate` <badge type="info" text="Update"/>

::: info Parameters

-   `identifier` <badge type="info" text="string | number"/> - Either the name or id of the loco
-   `direction` [<badge type="info" text="Direction"/>](https://trainlink-org.github.io/trainlink-types/enums/Direction.html) - The new direction that has been set, see [`Direction`](https://trainlink-org.github.io/trainlink-types/enums/Direction.html)
-   `socketID` <badge type="info" text="string"/> - The id of the socket that the [`throttle/setDirection`](#throttle-setdirection) originated from

**Response to:** [`throttle/setDirection`](#throttle-setdirection)
:::
Used to inform the client that a loco's direction has changed. It's not normally necessary to compare socketID to the ID of the client's socket and ignore any updates where these match as this means the message originated from the client. However, if your client will be changing the direction of a loco very quickly in succession then it may be helpful to check this property like with speed.
If the update originated due to an event other than `throttle/setSpeed` then `socketID` will be a blank string.

### `throttle/functionUpdate` <badge type="info" text="Update"/>

::: info Parameters

-   `identifier` <badge type="info" text="string | number"/> - Either the name or id of the loco
-   `functionNum` <badge type="info" text="number"/> - The number of the function that has been set
-   `state` <badge type="info" text="boolean"/> - The state the function has been set to
-   `socketID` <badge type="info" text="string"/> - The id of the socket that the [`throttle/setFunction`](#throttle-setfunction) originated from

**Response to:** [`throttle/setFunction`](#throttle-setfunction)
:::
Used to inform the client that a loco's function has changed state. It's not normally necessary to compare socketID to the ID of the client's socket and ignore any updates where these match as this means the message originated from the client. However, if your client will be changing the function of a loco very quickly in succession then it may be helpful to check this property like with speed.
If the update originated due to an event other than `throttle/setSpeed` then `socketID` will be a blank string.

### `throttle/trackPowerUpdate` <badge type="info" text="Update"/>

::: info Parameters

-   `state` <badge type="info" text="boolean"/> - The state the track power has been set to
-   `socketID` <badge type="info" text="string"/> - The id of the socket that the [`throttle/setTrackPower`](#throttle-settrackpower) originated from

**Response to:** [`throttle/setTrackPower`](#throttle-settrackpower)
:::
Used to inform the client that the track power has. It's not normally necessary to compare socketID to the ID of the client's socket and ignore any updates where these match as this means the message originated from the client. However, if your client will be changing the track power very quickly in succession then it may be helpful to check this property like with speed.
If the update originated due to an event other than `throttle/setSpeed` then `socketID` will be a blank string.

## Client to server events

### `throttle/setSpeed` <badge type="info" text="Setter"/>

::: info Parameters

-   `identifier` <badge type="info" text="string | number"/> - Either the name or id of the loco
-   `speed` <badge type="info" text="number"/> - The new speed to set

**Response:** [`throttle/speedUpdate`](#throttle-speedupdate)
:::

This command is used to set a loco to a specific speed.

### `throttle/setDirection` <badge type="info" text="Setter"/>

::: info Parameters

-   `identifier` <badge type="info" text="string | number"/> - Either the name or id of the loco
-   `direction` [<badge type="info" text="Direction"/>](https://trainlink-org.github.io/trainlink-types/enums/Direction.html) - The new direction to set, see [`Direction`](https://trainlink-org.github.io/trainlink-types/enums/Direction.html)

**Response:** [`throttle/directionUpdate`](#throttle-directionupdate)
:::

This command is used to set a loco to a specific direction. The `direction` property takes an enum with three different values, forwards, stopped and backwards which describes the direction to set. A value of stopped will cause an emergency stop.

### `throttle/setFunction` <badge type="info" text="Setter"/>

::: info Parameters

-   `identifier` <badge type="info" text="string | number"/> - Either the name or id of the loco
-   `functionNum` <badge type="info" text="number"/> - The number of the function to set
-   `state` <badge type="info" text="boolean"/> - The state to set the function to

**Response:** [`throttle/functionUpdate`](#throttle-functionupdate)
:::

This command is used to set a loco's function to a different state. The `functionNum` is the function number to set, eg if you wanted to set F6 to on for a loco with the id of 3 you would do as following:

```ts
socket.emit('throttle/setFunction', 3, 6, true);
```

### `throttle/setTrackPower` <badge type="info" text="Setter"/>

::: info Parameters

-   `state` <badge type="info" text="boolean"/> - The state to set the track power to

**Response:** [`throttle/trackPowerUpdate`](#throttle-trackpowerupdate)
:::

This command sets the track power to either on or off, true for on and false for off.
