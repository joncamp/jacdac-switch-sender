// auto-generated, do not edit.
namespace myModules {

    //% fixedInstance block="InputA"
    export const inputA = new modules.ButtonClient("inputA");

    //% fixedInstance block="InputB"
    export const inputB = new modules.ButtonClient("inputB");

    //% fixedInstance block="InputSwA"
    export const inputSwA = new modules.ButtonClient("inputSwA");

    //% fixedInstance block="InputSwB"
    export const inputSwB = new modules.ButtonClient("inputSwB");


    // start after main
    control.runInParallel(function() {
            myModules.inputA.start();
            myModules.inputB.start();
            myModules.inputSwA.start();
            myModules.inputSwB.start();
        
    })
}
    