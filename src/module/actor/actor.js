/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class AnimaPrimeActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
    else if (actorData.type === 'adversity') this._prepareAdversityData(actorData);
    else if (actorData.type === 'eidolon') this._prepareEidolonData(actorData);
  }

  _prepareCharacterData(actorData) {
    const data = actorData.data;
  }

  _prepareAdversityData(actorData) {
    const data = actorData.data;
  }

  _prepareEidolonData(actorData) {
    const data = actorData.data;
  }

}