import { manageActiveEffect } from "../effects.js";

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class AnimaPrimeItemSheet extends ItemSheet {

   /** @override */
   static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
         classes: ["animaprime", "sheet", "item"],
         width: 520,
         height: 480,
         tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
      });
   }

   /** @override */
   get template() {
      const path = "systems/animaprime/templates/item";
      // Return a single sheet for all item types.
      return `${path}/item-sheet.html`;

      // Alternatively, you could use the following return statement to do a
      // unique item sheet by type, like `weapon-sheet.html`.
      // return `${path}/item-${this.item.data.type}-sheet.html`;
   }

   /* -------------------------------------------- */

   /** @override */
   getData() {
      const data = super.getData();
      data.effects = this.item.effects;
      return data;
   }

   /* -------------------------------------------- */

   /** @override */
   setPosition(options = {}) {
      const position = super.setPosition(options);
      const sheetBody = this.element.find(".sheet-body");
      const bodyHeight = position.height - 192;
      sheetBody.css("height", bodyHeight);
      return position;
   }

   /* -------------------------------------------- */

   /** @override */
   activateListeners(html) {
      super.activateListeners(html);

      // Everything below here is only needed if the sheet is editable
      if (!this.options.editable) return;

      // Roll handlers, click handlers, etc. would go here.
      html.find(".effect-control").click(ev => {
         manageActiveEffect(ev, this.item)
      })
   }
}