export default class TimeStampModel {
    private _stamp: string;
    private _date: Date;

    /**
     * Constructor
     * @param date Date string in the Format YYYY-MM-DD HH:MM:SS 
     */
    constructor(date: string){
        const [dateComp, timeComp] = date.split(' ')
        const [year, month, day] = dateComp.split('-')
        const [hour, min, sec] = timeComp.split(':')
        this._date = new Date(+year, +month - 1, +day, +hour, +min, +sec);
        this._stamp = this.formatDate(this._date);
    }

    /**
     * Formats the given Date Object to the needed string
     * @param date Date Object to be formated
     * @returns Formated String (DD.MM.YYYY - HH:MM)
     */
    private formatDate (date: Date): string{
        return (this.formatTo2Digits(date.getUTCDate())
        + '.' + this.formatTo2Digits(date.getUTCMonth() + 1) 
        + '.' + this.formatTo2Digits(date.getUTCFullYear()) 
        + ' - ' + this.formatTo2Digits(date.getHours())
        + ':' + this.formatTo2Digits(date.getMinutes()))
    }

    /**
     * Formats a single digit number to a double digit string (3 => 03)
     * @param value Single digit value in double digit string format
     */
    private formatTo2Digits(value: number): string{
        if (value < 10 && value >= 0) {
            return '0' + value.toString();
        } else if ( value < 0 ){
            return '0';
        } else{
            return value.toString();
        }
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