IMPORT("SoundAPI");

const Mistical = new Sound("Light.ogg");
const Opening = new Sound("Opening.ogg");

var BLOCK_TYPE_FIRE = Block.createSpecialType({
  lightlevel: 8,
  rendertype: 91,
  sound: "grass",
});
var BLOCK_TYPE_PRINT = Block.createSpecialType({
  lightlevel: 10,
  sound: "glass",
  destroytime: -1,
});
IDRegistry.genBlockID("fironia");
Block.createBlock(
  "fironia",
  [{ name: "Fironia", texture: [["fironia", 0]], inCreative: true }],
  BLOCK_TYPE_FIRE
);
Translation.addTranslation("Fironia", { ru: "§6Пылающий огнецвет" });

var render1 = new ICRender.Model();
var model1 = BlockRenderer.createModel();
var Fironiashape = new ICRender.CollisionShape();
var entry = Fironiashape.addEntry();
entry.addBox(0, 0, 0, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.fironia, -1, Fironiashape);

render1.addEntry(model1);
IDRegistry.genBlockID("eucalyptusLog");
Block.createBlock(
  "eucalyptusLog",
  [
    {
      name: "Eucaluptus",
      texture: [
        ["eucalyptus", 0],
        ["eucalyptus", 0],
        ["eucalyptus", 1],
        ["eucalyptus", 1],
        ["eucalyptus", 1],
        ["eucalyptus", 1],
      ],
      inCreative: true,
    },
    {
      name: "Eucaluptus",
      texture: [
        ["eucalyptus", 1],
        ["eucalyptus", 1],
        ["eucalyptus", 1],
        ["eucalyptus", 1],
        ["eucalyptus", 0],
        ["eucalyptus", 0],
      ],
      inCreative: false,
    },
    {
      name: "Eucaluptus",
      texture: [
        ["eucalyptus", 1],
        ["eucalyptus", 1],
        ["eucalyptus", 0],
        ["eucalyptus", 0],
        ["eucalyptus", 1],
        ["eucalyptus", 1],
      ],
      inCreative: false,
    },
  ],
  "opaque"
);

IDRegistry.genBlockID("bark_eucalyptus");
Block.createBlock("bark_eucalyptus", [
  {
    name: "Bark Eucalyptus",
    texture: [
      ["eucalyptus_bark", 0],
      ["eucalyptus_bark", 0],
      ["bark_eucalyptus", 0],
      ["bark_eucalyptus", 0],
      ["bark_eucalyptus", 0],
      ["bark_eucalyptus", 0],
    ],
    inCreative: true,
  },
]);

IDRegistry.genBlockID("bark_pink");
Block.createBlock("bark_pink", [
  {
    name: "Bark Pink Log",
    texture: [
      ["barkPink", 0],
      ["barkPink", 0],
      ["barkPink", 1],
      ["barkPink", 1],
      ["barkPink", 1],
      ["barkPink", 1],
    ],
    inCreative: true,
  },
]);

Block.setDestroyTime(BlockID.eucalyptusLog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.eucalyptusLog, "wood");
Translation.addTranslation("Eucaluptus", { ru: "§aЭвкалипт" });
Block.createBlock(
  "pinkLog",
  [
    {
      name: "Pink Wood",
      texture: [
        ["pinkWood", 0],
        ["pinkWood", 0],
        ["pinkWood", 1],
        ["pinkWood", 1],
        ["pinkWood", 1],
        ["pinkWood", 1],
      ],
      inCreative: true,
    },
    {
      name: "Pink Wood",
      texture: [
        ["pinkWood", 1],
        ["pinkWood", 1],
        ["pinkWood", 1],
        ["pinkWood", 1],
        ["pinkWood", 0],
        ["pinkWood", 0],
      ],
      inCreative: false,
    },
    {
      name: "Pink Wood",
      texture: [
        ["pinkWood", 1],
        ["pinkWood", 1],
        ["pinkWood", 0],
        ["pinkWood", 0],
        ["pinkWood", 1],
        ["pinkWood", 1],
      ],
      inCreative: false,
    },
  ],
  "opaque"
);
Block.registerDropFunction("pinkLog", function (coords, blockID) {
  return [[BlockID.pinkLog, 1, 0]];
});
Recipes.addShaped(
  { id: BlockID.pink_planks, count: 4, data: 2 },
  ["vvv", "vlv", "vvv"],
  ["l", BlockID.pinkLog, -1]
);
Recipes.addShaped(
  { id: BlockID.eucalyptus_planks, count: 4, data: 2 },
  ["vvv", "vlv", "vvv"],
  ["l", BlockID.eucalyptusLog, -1]
);
Block.setDestroyTime(BlockID.pinkLog, 0.4);
Block.setDestroyTime(BlockID.eucalyptusLog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.pinkLog, "wood");

Recipes.addShaped(
  { id: VanillaBlockID.chest, count: 4, data: 0 },
  ["bbb", "b b", "bbb"],
  ["b", BlockID.eucalyptusLog, 0]
);

Recipes.addShaped(
  { id: VanillaBlockID.chest, count: 4, data: 0 },
  ["bbb", "b b", "bbb"],
  ["b", BlockID.pinkLog, 0]
);

Recipes.addShaped(
  { id: VanillaBlockID.chest, count: 4, data: 0 },
  ["bbb", "b b", "bbb"],
  ["b", BlockID.pink_planks, 0]
);

Recipes.addShaped(
  { id: VanillaBlockID.chest, count: 4, data: 0 },
  ["bbb", "b b", "bbb"],
  ["b", BlockID.eucalyptus_planks, 0]
);



IDRegistry.genBlockID("pink_planks");
Block.createBlock("pink_planks", [
  { name: "Pink planks", texture: [["pink_planks", 0]], inCreative: true },
]);


IDRegistry.genBlockID("eucalyptus_planks");
Block.createBlock("eucalyptus_planks", [
  {
    name: "Eucalyptus planks",
    texture: [["eucalyptus_planks", 0]],
    inCreative: true,
  },
]);

IDRegistry.genBlockID("hewn_eucalyptus");
Block.createBlock("hewn_eucalyptus", [
  { name: "Eucalyptus hewn", texture: [["eucalyptus", 1]], inCreative: true },
]);


IDRegistry.genBlockID("hewn_pink_log");
Block.createBlock("hewn_pink_log", [
  { name: "Pink hewn", texture: [["pinkWood", 1]], inCreative: true },
]);


IDRegistry.genBlockID("dungeon_print_bricks");
Block.createBlock("dungeon_print_bricks", [
  {
    name: "Dungeon old brick",
    texture: [["dungeon_brick", 0]],
    inCreative: true,
  },
]);

ToolAPI.registerBlockMaterial(BlockID.dungeon_print_bricks, "unbreaking", 4);
IDRegistry.genBlockID("dungeon_print_bricks_active");
Block.createBlock(
  "dungeon_print_bricks_active",
  [
    {
      name: "Dungeon print active brick",
      texture: [["mysterious print", 0]],
      inCreative: false,
    },
  ],
  BLOCK_TYPE_PRINT
);

IDRegistry.genBlockID("dungeon_print_bricks_active_1");
Block.createBlock(
  "dungeon_print_bricks_active_1",
  [
    {
      name: "Dungeon print active brick",
      texture: [["print color", 0]],
      inCreative: false,
    },
  ],
  BLOCK_TYPE_PRINT
);

IDRegistry.genBlockID("dungeon_print_bricks_deactive");
Block.createBlock("dungeon_print_bricks_deactive", [
  {
    name: "Dungeon print deactive brick",
    texture: [["deactive print", 0]],
    inCreative: true,
  },
]);

ToolAPI.registerBlockMaterial(
  BlockID.dungeon_print_bricks_deactive,
  "unbreaking",
  4
);

IDRegistry.genItemID("blueCrystal");
Item.createItem("blueCrystal", "Blue crystal", { name: "blue_crystal" });


IDRegistry.genItemID("orangeCrystal");
Item.createItem("orangeCrystal", "Orange crystal", { name: "orange_crystal" });

IDRegistry.genItemID("flameCrystal");
Item.createItem("flameCrystal", "Flame Crystal", { name: "orange_crystal" });


IAHelper.makeAdvancedAnim(ItemID.flameCrystal,"flame_crystal",2,[1,2,3,4])

Item.registerNameOverrideFunction(
  ItemID.flameCrystal,
  function (item, translation, name) {
    var players = Network.getConnectedPlayers();
    for (var i in players) {
      if (Entity.getSneaking(players[i])) {
        return (
          Translation.translate(name) +
          "\n" +
          Translation.translate(
            "Flame description"
          )
        );
      }
    }
  }
);



Recipes.addShaped(
  { id: ItemID.blueCrystal, count: 1, data: 0 },
  ["ldl", "lsl", "ddd"],
  ["d", 264, -1, "d", 3, -1, "l", 18, -1, "s", 6, -1]
);

IDRegistry.genItemID("parchment_gold");
Item.createItem("parchment_gold", "Castle print", { name: "parchment_gold" });


IDRegistry.genItemID("parchment_lazuli");
Item.createItem("parchment_lazuli", "Castle print", { name: "parchment_blue" });

Callback.addCallback(
  "ItemUse",
  function (coords, item, block, isExter, player) {
    if (item.id == ItemID.blueCrystal) {
      Dimensions.transfer(player, InfiniteForest.id);
    }
    if (item.id == ItemID.orangeCrystal) {
      Dimensions.transfer(player, 0);
    }
    if (
      item.id == ItemID.parchment_gold &&
      block.id == BlockID.dungeon_print_bricks_deactive
    ) {
      var region = BlockSource.getDefaultForActor(player);
      if (
        region.getBlockId(coords.x, coords.y - 1, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x, coords.y, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x, coords.y + 1, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x + 1, coords.y, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x - 1, coords.y, coords.z) ==
          BlockID.dungeon_print_bricks_deactive
      ) {
        region.setBlock(
          coords.x,
          coords.y,
          coords.z,
          BlockID.dungeon_print_bricks_active,
          0
        );

        Mistical.play();
      }
    }

    if (
      item.id == ItemID.parchment_lazuli &&
      block.id == BlockID.dungeon_print_bricks_deactive
    ) {
      var region = BlockSource.getDefaultForActor(player);
      if (
        region.getBlockId(coords.x, coords.y - 1, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x, coords.y, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x, coords.y + 1, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x + 1, coords.y, coords.z) ==
          BlockID.dungeon_print_bricks_deactive &&
        region.getBlockId(coords.x - 1, coords.y, coords.z) ==
          BlockID.dungeon_print_bricks_deactive
      ) {
        region.setBlock(
          coords.x,
          coords.y,
          coords.z,
          BlockID.dungeon_print_bricks_active_1,
          0
        );

        Mistical.play();
      }
    }
  }
);

TileEntity.registerPrototype(BlockID.dungeon_print_bricks_active, {
  defaultValues: { onemessage: 0 },
  useNetworkItemContainer: true,
  tick: function () {
    Opening.play();
    if (World.getThreadTime() % 60 == 0) {
      this.blockSource.destroyBlock(this.x, this.y, this.z, false);
      this.blockSource.destroyBlock(this.x, this.y - 1, this.z, false);
      this.blockSource.destroyBlock(this.x, this.y + 1, this.z, false);
      this.blockSource.destroyBlock(this.x + 1, this.y - 1, this.z, false);
      this.blockSource.destroyBlock(this.x + 1, this.y + 1, this.z, false);
      this.blockSource.destroyBlock(this.x + 1, this.y, this.z, false);

      this.blockSource.setBlock(
        this.x - 1,
        this.y - 1,
        this.z - 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );
      this.blockSource.setBlock(
        this.x - 1,
        this.y - 1,
        this.z - 2,
        BlockID.dungeon_print_bricks_deactive,
        0
      );
      this.blockSource.setBlock(
        this.x - 1,
        this.y,
        this.z - 1,
        BlockID.dungeon_print_bricks_active_1,
        0
      );
      this.blockSource.setBlock(
        this.x - 1,
        this.y,
        this.z - 2,
        BlockID.dungeon_print_bricks_deactive,
        0
      );
      this.blockSource.setBlock(
        this.x - 1,
        this.y + 1,
        this.z - 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );
      this.blockSource.setBlock(
        this.x - 1,
        this.y + 1,
        this.z - 2,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      if (this.data.onemessage == 0) {
        Game.message("§9Вы можете идти");
        this.data.onemessage += 1;
      }
    }
  },
  // destroy: function (id,count,data,coords,block){

  // }
});

TileEntity.registerPrototype(BlockID.dungeon_print_bricks_active_1, {
  defaultValues: { onemessage: 0 },
  useNetworkItemContainer: true,
  tick: function () {
    Opening.play();
    if (World.getThreadTime() % 60 == 0) {
      this.blockSource.destroyBlock(this.x, this.y, this.z, false);
      this.blockSource.destroyBlock(this.x, this.y - 1, this.z, false);
      this.blockSource.destroyBlock(this.x, this.y + 1, this.z, false);
      this.blockSource.destroyBlock(this.x, this.y - 1, this.z + 1, false);
      this.blockSource.destroyBlock(this.x, this.y + 1, this.z + 1, false);
      this.blockSource.destroyBlock(this.x, this.y, this.z + 1, false);
      this.blockSource.destroyBlock(this.x, this.y - 1, this.z - 1, false);
      this.blockSource.destroyBlock(this.x, this.y + 1, this.z - 1, false);
      this.blockSource.destroyBlock(this.x, this.y, this.z - 1, false);

      this.blockSource.setBlock(
        this.x,
        this.y,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x,
        this.y - 1,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x,
        this.y + 1,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x + 1,
        this.y - 1,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x + 1,
        this.y + 1,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x + 1,
        this.y,
        this.z + 1,
        BlockID.dungeon_print_bricks_active,
        0
      );

      this.blockSource.setBlock(
        this.x + 2,
        this.y - 1,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x + 2,
        this.y + 1,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      this.blockSource.setBlock(
        this.x + 2,
        this.y,
        this.z + 1,
        BlockID.dungeon_print_bricks_deactive,
        0
      );

      if (this.data.onemessage == 0) {
        Game.message("§9Вы можете идти");
        this.data.onemessage += 1;
      }
    }
  },
  // destroy: function (id,count,data,coords,block,id){

  // }
});
