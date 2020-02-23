import * as alt from 'alt';

alt.on('playerConnect', (player) => {
    player.model = 'mp_m_freemode_01';
    player.giveWeapon(736523883, 9999, true);
    player.giveWeapon(2024373456, 9999, false);
    player.giveWeapon(317205821, 9999, true);
    player.spawn(813, -279, 66, 1000);
    new alt.Vehicle("adder", 813, -279, 66, 0, 0, 0);
});