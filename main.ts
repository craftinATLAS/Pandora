/**
 * ==========================================
 * 
 * �� PART 1: THE LIVING CHEST ENCOUNTER
 * 
 * ==========================================
 */
function startAIEngineLoops () {
    loops.forever(function () {
                                                                                                                                                                                                                                                                                                                                    if (assistantActive) {
                                                                                                                                                                                                                                                                                                                                                let playerPos = player.position();
                                                                                                                                                                                                                                                                                                                                                            let agentPos = agent.getPosition();
                                                                                                                                                                                                                                                                                                                                                                        let distance = Math.sqrt(Math.pow(agentPos.getValue(Axis.X) - playerPos.getValue(Axis.X), 2) + Math.pow(agentPos.getValue(Axis.Y) - playerPos.getValue(Axis.Y), 2) + Math.pow(agentPos.getValue(Axis.Z) - playerPos.getValue(Axis.Z), 2));
                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                if (distance > 10) {
                                                                                                                                                                                                                                                                                                                                                                                                                agent.teleportToPlayer();
                                                                                                                                                                                                                                                                                                                                                                                                                            } else if (distance > 3) {
                                                                                                                                                                                                                                                                                                                                                                                                                                            agent.turn(TurnDirection.Left); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                            agent.move(SixDirection.Forward, 1);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        loops.pause(400); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });
}
function triggerChestLaunch () {
    introductionTriggered = true
    player.say("�� *WHACK!* The chest breaks open and rockets into the sky!")
    player.execute(
    "playsound ambient.weather.thunder @a"
    )
    agent.move(DOWN, 1)
    loops.pause(1200)
    agentIntroductionSpeech()
}
player.onChat("standby", function () {
    assistantActive = false
    player.say("�� AI Assistant: Powering down to standby mode.")
})
player.onChat("", function (oreName) {
	
})
function agentIntroductionSpeech () {
    player.say("�� Agent: \"System reboot... 100% complete.\"")
    loops.pause(2000)
    player.say("�� Agent: \"Greetings, Creator. Thank you for freeing me from that confinement matrix.\"")
    loops.pause(2500)
    player.say("�� Agent: \"I am your autonomous AI Assistant. Voice matrix and material distribution protocols are now fully active.\"")
    assistantActive = true
    startAIEngineLoops()
}
player.onChat("", function (structureName) {
	
})
player.onChat("run", function () {
	
})
player.onChat("check weather", function () {
    if (false) {
    	
    }
})
loops.forever(function () {
    if (false) {
    	
    }
})
// Simulates a natural spawn event right in front of the player
player.onChat("spawn_event", function () {
    introductionTriggered = false
    assistantActive = false
    // Calculate a position 5 blocks in front of the player
    spawnPos = positions.add(
    pos(0, 0, 0),
    pos(0, 0, 5)
    )
    // Position the agent at the core location
    agent.teleport(pos(0, 0, 0), WEST)
    // Spawn the Custom Living Chest with exactly 3 health points (1.5 Hearts)
    player.execute(
    `summon armor_stand ${spawnPos.getValue(Axis.X)} ${spawnPos.getValue(Axis.Y)} ${spawnPos.getValue(Axis.Z)} {CustomName:"\\"Living Chest\\"",CustomNameVisible:1b,Health:3f,Attributes:[{Name:"generic.max_health",Base:3.0}]}`
    )
    player.execute(
    "replaceitem entity @e[type=armor_stand,name=\"Living Chest\",c=1] slot.armor.head 0 chest"
    )
    player.say("⚠️ You hear a strange mechanical breathing sound from a chest ahead...")
    loops.forever(function () {
                                                                                                                    if (!introductionTriggered) {
                                                                                                                                player.execute(`particle minecraft:basic_smoke_particle ${spawnPos.getValue(Axis.X)} ${spawnPos.getValue(Axis.Y) + 1} ${spawnPos.getValue(Axis.Z)}`);
                                                                                                                                            // Robot inside wiggles to escape
                                                                                                                                                        agent.turn(TurnDirection.Left);
                                                                                                                                                                    agent.turn(TurnDirection.Right);
                                                                                                                                                                            }
                                                                                                                                                                                    loops.pause(1500); 
                                                                                                                                                                                        });
})
let spawnPos: Position = null
let assistantActive = false
let introductionTriggered = false
let aiSpeech: string[] = []
