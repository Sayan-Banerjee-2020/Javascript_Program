const input = document. createElement ('input');

const state = { value: "Hi" }

model(state, input);

function model(state, input) {

    // matches same value
    input. value = state. value;
    
    Object. defineProperty(state, 'value', {
        get () {
            return input.value;
        },
        set (newVal) {
            // push update to input
            if(newVal != input.value) {
                input.value = newVal;
            }
            return;
        }
    });
    
    input.addEventListener('change', function (e) {
        const newValue = e. target.value;
        // update state
        state. value = newValue;
    })
}

console.log (input.value)  // 'Hi'
state.value = 'Sayan'
console.log (input.value) // 'Sayan'
input.value = 'Banerjee'
input.dispatchEvent (new Event ('change' ))
console.log(state.value) // 'Banerjee'