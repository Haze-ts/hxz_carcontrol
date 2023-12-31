
RegisterKeyMapping('opencar', 'Apri-car-menu', 'KEYBOARD', 'M')
RegisterCommand('opencar', function()
    if IsPedInAnyVehicle(PlayerPedId(), false) then
        SetNuiFocus(true, true)
        SendNUIMessage({
            action = "open"
        })
    end
end)

RegisterNUICallback('Close', function()
    SetNuiFocus(false, false)
    SendNUIMessage({
        action = "close"
    })
end)

RegisterNUICallback('engine', function()
    local Ped = PlayerPedId()
    local GetVehiclePed = GetVehiclePedIsIn(Ped)
    local engine = GetIsVehicleEngineRunning(GetVehiclePed)

    if engine == 1 then
        SetVehicleEngineOn(GetVehiclePed, 0, false, true)
    else
        SetVehicleEngineOn(GetVehiclePed, 1, false, true)
    end
end)

RegisterNUICallback('openDoor', function(data)
    local Ped = PlayerPedId()
    local GetVehiclePed = GetVehiclePedIsIn(Ped, false)

     if (GetVehicleDoorAngleRatio(GetVehiclePed, data) == 0) then
        SetVehicleDoorOpen(GetVehiclePed, data, false, false)
    else
        SetVehicleDoorShut(GetVehiclePed, data, false)
    end
end)

RegisterNUICallback('openWindow', function(window)
    local Ped = PlayerPedId()
    local GetVehiclePed = GetVehiclePedIsIn(Ped, false)
    if not IsVehicleWindowIntact(GetVehiclePed, window) then
        RollUpWindow(GetVehiclePed, window)
    else
        RollDownWindow(GetVehiclePed, window)
    end
end)


RegisterNUICallback('selectSeat', function(seat)
    local Ped = PlayerPedId()
    local GetVehiclePed = GetVehiclePedIsIn(Ped, false)
    
    if IsVehicleSeatFree(GetVehiclePed, seat) then
        SetPedIntoVehicle(Ped, GetVehiclePed, seat)
    end
end)


RegisterNUICallback('lock', function()
    local Ped = PlayerPedId()
    local GetVehiclePed = GetVehiclePedIsIn(Ped, false)
    local i = GetVehicleDoorLockStatus(GetVehiclePed)

    if i == 1 then
        SetVehicleDoorsLocked(GetVehiclePed, 2)
    else
        SetVehicleDoorsLocked(GetVehiclePed, 1)
    end
end)