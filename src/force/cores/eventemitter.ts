// eslint-disable-next-line no-unused-vars
type IListener = (...args: any[]) => boolean | void | any;

export class EventEmitter {
  eventMap = new Map<string, Set<Function>>();
  on(eventName: string, listener: IListener) {
    let set = this.eventMap.get(eventName);
    if (!set) {
      set = new Set();
      this.eventMap.set(eventName, set);
    }
    set.add(listener);
    return this.off.bind(this, eventName, listener);
  }

  off(eventName: string, listener: IListener) {
    const set = this.eventMap.get(eventName);
    if (set) {
      set.delete(listener);
      if (set.size === 0) {
        this.eventMap.delete(eventName);
      }
    }
  }

  emit(eventName: string, ...args: any[]) {
    const set = this.eventMap.get(eventName);
    if (!set) return;
    for (const listener of set) {
      listener(...args);
    }
  }

  get(eventName: string) {
    return this.eventMap.get(eventName);
  }

  clear(eventName: string) {
    this.eventMap.delete(eventName);
  }
}
