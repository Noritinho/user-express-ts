export default class AppError {
    private readonly _message: string;
    private readonly _statusCode: number;

    constructor(message: string, statusCode: number = 400) {
        this._message = message;
        this._statusCode = statusCode;
    }

    public get message(): string {
        return this._message;
    }

    public get statusCode(): number {
        return this._statusCode;
    }
}
