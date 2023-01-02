export default class TimeStampModel {
    private _stamp: string;
    private _date: Date;

    constructor(date: string){
        const [dateComp, timeComp] = date.split(' ')
        const [year, month, day] = dateComp.split('-')
        const [hour, min, sec] = timeComp.split(':')
        this._date = new Date(+year, +month - 1, +day, +hour, +min, +sec);
        this._stamp = this.formatDate(this._date);
    }

    private formatDate (date: Date): string{
        return date.getUTCDate() + '.' + date.getUTCMonth() + '.' + date.getUTCFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes()       
    }

    /**
     * Getter Function of the Property stamp
     */
    get stamp(): string {
        return this._stamp;
    }
    /**
     * Setter Function of the Property stamp
     * @param value Value to be set
     */
    set stamp(value) {
        this._stamp = value
    }

    /**
     * Getter Function of the Property date
     */
    get date(): Date {
        return this._date;
    }
    /**
     * Setter Function of the Property date
     * @param value Value to be set
     */
    set date(value) {
        this._date = value
    }
}