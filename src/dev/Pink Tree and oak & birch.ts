Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
   World.setBlock(coords.x-6,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-6,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-5,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-5,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-5,coords.y+17,coords.z-2,18,0);                  World.setBlock(coords.x-5,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-4,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-4,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x-4,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+10,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-5,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z+0,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+3,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+5,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-4,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+1,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+10,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+6,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+13,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+0,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+1,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+2,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+3,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+4,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+5,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+12,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+13,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+1,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+13,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+14,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+3,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+4,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+5,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-4,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+13,coords.z-2,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+1,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+3,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+4,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+4,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+5,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+5,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-4,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-2,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+3,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+5,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+7,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-5,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+4,coords.y+14,coords.z-4,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-5,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-4,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+5,coords.y+14,coords.z-4,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+6,coords.y+13,coords.z-4,18,0);                  World.setBlock(coords.x+6,coords.y+13,coords.z-3,18,8)
    
}}}})

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
World.setBlock(coords.x,coords.y+1,coords.z,17,0);   
World.setBlock(coords.x,coords.y+2,coords.z,17,0);   
World.setBlock(coords.x,coords.y+3,coords.z,17,0);   


World.setBlock(coords.x + 1,coords.y+3,coords.z,18,0);  
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,0);   
World.setBlock(coords.x + 1,coords.y+3,coords.z+ 1,18,0);  
World.setBlock(coords.x - 1,coords.y+3,coords.z- 1,18,0);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,0);   
World.setBlock(coords.x - 1,coords.y+3,coords.z+ 1,18,0);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,0);   
World.setBlock(coords.x + 1,coords.y+3,coords.z,18,0);   
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,0);   
World.setBlock(coords.x,coords.y+4,coords.z-1,18,0);   


    
    World.setBlock(coords.x,coords.y+4,coords.z,18,0);   
    World.setBlock(coords.x,coords.y+4,coords.z- 1,18,0); 
    World.setBlock(coords.x,coords.y+4,coords.z+ 1,18,0);   
    World.setBlock(coords.x - 1,coords.y+4,coords.z,18,0);   
    World.setBlock(coords.x + 1,coords.y+4,coords.z,18,0);   
    
    World.setBlock(coords.x,coords.y+5,coords.z,18,0); 
    
}}}})

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
World.setBlock(coords.x,coords.y+1,coords.z,17,2);   
World.setBlock(coords.x,coords.y+2,coords.z,17,2);   
World.setBlock(coords.x,coords.y+3,coords.z,17,2);   


World.setBlock(coords.x + 1,coords.y+3,coords.z,18,2);  
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,2);   
World.setBlock(coords.x + 1,coords.y+3,coords.z+ 1,18,2);  
World.setBlock(coords.x - 1,coords.y+3,coords.z- 1,18,2);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,2);   
World.setBlock(coords.x - 1,coords.y+3,coords.z+ 1,18,2);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,2);   
World.setBlock(coords.x + 1,coords.y+3,coords.z,18,2);   
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,2);   
World.setBlock(coords.x,coords.y+3,coords.z-1,18,2);   


    
    World.setBlock(coords.x,coords.y+4,coords.z,18,2);   
    World.setBlock(coords.x,coords.y+4,coords.z- 1,18,2); 
    World.setBlock(coords.x,coords.y+4,coords.z+ 1,18,2);   
    World.setBlock(coords.x - 1,coords.y+4,coords.z,18,2);   
    World.setBlock(coords.x + 1,coords.y+4,coords.z,18,2);   
    
    World.setBlock(coords.x,coords.y+5,coords.z,18,2); 
    
}}}})


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.fironia,0);   
    }
    
}}})