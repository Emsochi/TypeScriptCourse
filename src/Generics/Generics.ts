class TypeLogger<T> {

 public LogType(type : T) : void {
    console.log(typeof type)
 }

}

let numberTypeLogger : TypeLogger<number> = new TypeLogger<number>();
let stringTypeLogger :   TypeLogger<string> = new TypeLogger<string>();

numberTypeLogger.LogType(1);
stringTypeLogger.LogType("");


