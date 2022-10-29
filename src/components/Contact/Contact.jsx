import React, {Component} from 'react';

export  class Contact extends Component {


    render () {
        return (
            <form>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <button type='button'>Add contact</button>
            </form>
        )
    }
}


