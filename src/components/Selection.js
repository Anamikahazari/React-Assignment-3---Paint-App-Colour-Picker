import React from 'react';

const Selection = (props) => {
    const [value, changevalue] = useState({background:''});
    const valueUpdate = (nextBackground)=>{
      // props.applyColor(changevalue);
      changevalue({background:nextBackground});
    }
  return (
    <div className="fix-box" style = {value} onClick ={()=>props.applyColor(valueUpdate)}>
      <h2 className ="subheading">Selection</h2>
    </div>
  )
}
export default Selection;

// App.js contains three Selection components which accepts the prop applyColor.

// Structure Selection.js such that

// It accepts the prop applyColor

// It renders a div component with className fix-box

// This div component should have a style attribute that takes its value from the component's state variable

// Initial value of this state variable should be {background:''}

// When the component is clicked, this state variable should get the value of the nextBackground state variable of the App component. (Hint: use applyColor for this)

// The div component should have a child component that's a h2 tag having text "Selection" and class subheading.

// Export the Selection component by default.