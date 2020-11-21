import React, {Component } from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

const DropdownComponent = observer(class DropdownComponent extends Component {

	constructor (props) {
        super(props);
    }
	componentWillMount(){

	}

	render(){
		const { dropDownOptions,
				store,
				selectedOption,
				ismulti,
				disabled,
				isFixed } = this.props;
			
		return (
			<Select className="text-left"
		        defaultValue={(!ismulti && selectedOption) ? dropDownOptions.find(option => option.value === selectedOption.value) : selectedOption}
		        onChange={(event) => this.props.callBack(event)}
		        options={dropDownOptions} 
		        isMulti={ismulti ? ismulti : false}
		        closeMenuOnSelect={ismulti ? false : true}
		        menuPosition={ismulti || isFixed ? "fixed" : "absolute"}
		        menuShouldBlockScroll={ismulti || isFixed ? true : false}
				isSearchable={false}
				isDisabled={disabled ? true:false}
		    />
		)
	}
})
export default DropdownComponent;
