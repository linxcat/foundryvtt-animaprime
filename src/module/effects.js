export function  manageActiveEffect(event, owner) {
    event.preventDefault();
    const a = event.currentTarget;
    const li = a.closest("li");
    const effect = li.dataset.effectId ? owner.effects.get(li.dataset.effectId) : null;
    switch ( a.dataset.action ) {
      case "create":
        return ActiveEffect.create({
          label: "New Effect",
          icon: "icons/svg/aura.svg",
          origin: owner.uuid,
        }, owner).create();
      case "edit":
        return effect.sheet.render(true);
      case "delete":
        return effect.delete();
    }
}