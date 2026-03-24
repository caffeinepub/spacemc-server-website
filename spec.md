# AstralWorld Server Website

## Current State
Minecraft server website with space theme, featuring Ranks (4 ranks: MVP, Ace, Legend, Hacker), GameModes (4 modes: Survival, Space PvP, Planet Skyblock, Galaxy Economy), Hero section, and Footer. Server IP is DOMAINMC.aternos.me:17306.

## Requested Changes (Diff)

### Add
- 5 corrupted-themed ranks (Infected ₹20, Tainted ₹40, Corrupted ₹70, Void Corrupted ₹100, Corrupted God ₹150) with dark/glitch visuals

### Modify
- GameModes section: replace all 4 gamemodes with only LifeSteal gamemode
- Server domain in Hero and Footer: change to AstralWorld.play.hosting
- Server name references from DomainMC to AstralWorld

### Remove
- Old 4 rank cards (MVP, Ace, Legend, Hacker)
- Survival, Space PvP, Planet Skyblock, Galaxy Economy gamemodes

## Implementation Plan
1. Update Ranks.tsx with 5 corrupted ranks and pricing
2. Update GameModes.tsx to show only LifeSteal gamemode with appropriate description
3. Update Hero.tsx SERVER_IP and title to AstralWorld
4. Update Footer.tsx SERVER_IP and branding to AstralWorld
