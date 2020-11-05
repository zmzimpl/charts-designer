import { MzSafeAny } from "@/models/basic/custom-type";

type Subscriber<T = any> = (data: T) => void;

export class PubSub {
  /**
   * 存储订阅者，并把topic与subscribers关联
   */
  private static eventity: {
    [prop: string]: Array<{ subscriber: Subscriber, context: object }>
  } = {};

  /**
   * 为topic增加一个订阅者
   * 该方法会允许topic拥有多个相同的订阅者，为避免重复添加，在某个时刻只允许一个订阅者存在的时候
   * 可以使用once方法；或者在不需要的时候调用unsubscribe方法删除订阅者
   */
  static subscribe<T = any>(topic: string, subscriber: Subscriber<T>, ctx?: MzSafeAny) {
    const {eventity} = this;
    let subs = eventity[topic];
    if (!subs) {
      subs = eventity[topic] = [];
      subs.push({ subscriber, context: ctx });
      return this;
    }
    for (let i = 0; i < subs.length; i++) {
      const handler = subs[i];
      if (handler.subscriber === subscriber) {
        return this;
      }
    }
    subs.push({ subscriber, context: ctx });
    return this;
  }

  /**
   * 该方法只会为topic添加一个订阅者
   */
  static once<T = any>(topic: string, subscriber: Subscriber<T>, ctx: MzSafeAny) {
    const {eventity} = this;

    // 不管有没有订阅者，直接设置。注意：该方法会清空topic的其它订阅者，
    // 包括用subscribe方法添加的订阅者。因此，除非你很明确你要做什么，否则，
    // 要避免该方法与subscribe方法订阅同一个topic。
    eventity[topic] = [{ subscriber, context: ctx }];

    return this;
  }

  /**
   * 发布一条消息
   */
  static publish<T>(topic: string, data?: T) {
    const {eventity} = this;
    const subs = eventity[topic];
    if (!subs) {
      return this;
    }
    for (let i = 0; i < subs.length; i++) {
      const handler = subs[i];
      if (handler.context) {
        handler.subscriber.call(handler.context, data);
      } else {
        handler.subscriber(data);
      }
    }
    return this;
  }

  /**
   * 取消订阅
   */
  static unsubscribe(topic: string, subscriber?: Subscriber, ctx?: MzSafeAny) {
    const {eventity} = this;
    const subs = eventity[topic];
    if (!subs) {
      return this;
    }
    if (subscriber) {
      for (let i = 0; i < subs.length; i++) {
        const handler = subs[i];
        if (handler.subscriber === subscriber && handler.context === ctx) {
          subs.splice(i, 1);
        }
      }
    } else {
      eventity[topic] = [];
    }
    return this;
  }

}


