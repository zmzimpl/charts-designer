import { MzSafeAny } from "@/models/basic/custom-type";

export class UndoRedoUtil {


    static undoStack: InsightRedoUndoParams[] = [];

    static redoStack: InsightRedoUndoParams[] = [];

    constructor() { }

    execute(action: (...params: MzSafeAny[]) => MzSafeAny, reverse: (...params: MzSafeAny[]) => MzSafeAny, ctx: MzSafeAny) {
        UndoRedoUtil.undoStack.push({ action, reverse, ctx });
        action.call(ctx);
        UndoRedoUtil.redoStack.length = 0;
    }

    /**
     * 撤销
     */
    static undo() {
        if (this.undoStack?.length) {
            const c = this.undoStack.pop();
            if (c) {
                c.reverse.call(c.ctx);
                this.redoStack.push(c);
            }
        }
    }

    /**
     * 重做
     */
    static redo() {
        if (this.redoStack?.length) {
            const c = this.redoStack.pop();
            if (c) {
                c.action.call(c.ctx);
                this.undoStack.push(c);
            }
        }
    }

    static clear() {
        this.redoStack = [];
        this.undoStack = [];
    }

}

export interface InsightRedoUndoParams {
    action: (...params: MzSafeAny[]) => MzSafeAny,
    reverse: (...params: MzSafeAny[]) => MzSafeAny,
    ctx: MzSafeAny
}