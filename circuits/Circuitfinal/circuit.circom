pragma circom 2.0.0;

/*This circuit template checks that c is the multiplication of a and b.*/  

template FinalCircuit () {  
   // signal inputs

   signal input a;
   signal input b;

   // signal from gates
   signal x;
   signal y;


   // final signal output
   signal output Q;

   // component gate uses to create a FinalCircuit
   component andGate = AND();
   component notGate = NOT();
   component orGate = OR();

   // Circuit logic
   andGate.a <== a;          // input
   andGate.b <== b;         //  input 
   x <== andGate.out;       // output


   notGate.in <== b;        //input
   y <== notGate.out;       // output


   orGate.x <== x;            // input
   orGate.y <==y;            // input
   Q <== orGate.out;         // output

}

template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}

template OR() {
    signal input x;
    signal input y;
    signal output out;

    out <== x + y - x*y;
}

component main = FinalCircuit();