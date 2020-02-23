import * as alt from 'alt';
import * as native from 'natives';

alt.everyTick(update);

function update(){
  if (native.isAimCamActive()){
    native.hideHudComponentThisFrame(14);   
    native.drawSprite("visualflow", "crosshair", 0.5, 0.5, 0.008, 0.009, 0, 255, 255, 255, 100, false);
    alt.log(native.getLocalPlayerAimState());
  }
  let vehicle = alt.Player.local.vehicle;
  if (vehicle){
    drawText("KM/H " + (native.getEntitySpeed(vehicle.scriptID) * 3.6).toFixed(0), 0.5, 0.005, 1, 255, 255, 255, 100, 0, false, false, true);
  }
}

function drawText(text, xPos, yPos, scale, r, g, b, alpha, font, justify, shadow, outline) {
  native.setTextScale(1.0, scale);
  native.setTextFont(font);
  native.setTextColour(r, g, b, alpha);
  native.setTextJustification(justify);

  if (justify == 2) native.setTextWrap(0.0, xPos);
  if (shadow)    native.setTextDropshadow(0, 0, 0, 0, 255);
  if (outline)    native.setTextOutline();

  native.beginTextCommandDisplayText("STRING");
  native.addTextComponentSubstringPlayerName(text);

  native.endTextCommandDisplayText(xPos, yPos);
}