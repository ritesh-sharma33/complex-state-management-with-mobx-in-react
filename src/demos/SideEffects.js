// Different types of side effect handlers
import { autorun, reaction, when } from "mobx";

// The autorun side-effect handler
const disposer = autorun((reaction) => {
  //
});

disposer();

// The reaction side-effect handler
const reactionDisposer = reaction(
  () => {}, // The tracker function
  (value) => {} // The effect function (executed when value changes)
);
  
reactionDisposer();
  
// The when side-effect handler
const whenHandler = when(
  () => {}, // The predicate function
  () => {} // The effect function (executed when pred func returns true)
);