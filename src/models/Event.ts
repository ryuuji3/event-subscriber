export default class Event {

    public constructor(data) {
        this._data = data;
        this._created = new Date();
        this._lastUpdated = new Date();
    }

    protected _data: Object;
    protected _created: Date;
    protected _lastUpdated: Date;

    public get data() {
        return this._data;
    }

    public set data(data: Object) {
        this._data = data;
        this._lastUpdated = new Date();
    }

    public get created() {
        return this._created.toISOString();
    }

    public get lastUpdated() {
        return this._lastUpdated.toISOString();
    }
}