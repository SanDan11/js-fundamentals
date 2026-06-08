const guildRoaster = [
  { name: "Alan", level: 25, class: "Monk", role: "healer" },
  { name: "Zeek", level: 15, class: "Warrior", role: "DPS" },
  { name: "Mannoh69", level: 34, class: "Priest", role: "healer" },
  { name: "Amon", level: 15, class: "Shaman", role: "DPS" },
  { name: "VoidSword", level: 44, class: "Dark Knight", role: "Tank" },
  { name: "Crispbill", level: 90, class: "Paladin", role: "tank" },
];

function addMember(members, newMember) {
    members.push(newMember);
    console.log(`${newMember.name} has joined the guild!`)
  }

function displayGuild(members) {
  for (const member of members) {
    const { name, level, class: memberClass, role } = member;
    console.log(
      `Name: ${name} Level: ${level} Class: ${memberClass} Role: ${role}`,
    );
  }
}


// const sFilter = shopList.filter(items => items.price < 100).map(items => items.item);
// console.log(sFilter);

function filterByRole(role) {
    const mFilter = guildRoaster.filter(members => members.role === role);
    console.log(mFilter);
}


// const redWeight = shopList.reduce((total, items) => total + items.weight, 0);
// console.log(redWeight);

function averageLevel(members) {
    const avLevel = Math.round(guildRoaster.reduce((total, members) => total + members.level, 0) / guildRoaster.length);
    console.log(`Average level is ${avLevel}`);
}

averageLevel(guildRoaster);
// addMember(guildRoaster, { name: "ShadowFang", level: 55, class: "Rogue", role: "DPS" });
// displayGuild(guildRoaster);

// filterByRole("healer");

// filterByRole("tank");

// filterByRole("DPS");


// const {first, last, ...rest} = guildRoaster;

// console.log(guildRoaster);
