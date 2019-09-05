import './index.css';
import Card from './Card';
import React from 'react';
import {bindActionCreators} from 'redux';
import { initialCards, addItem} from '../store';
import {connect} from 'react-redux';

class Index extends React.Component {
   
    static async getInitialProps ({store}) {
       store.dispatch(initialCards());
    }

   render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img 
                        src="/static/logo.png"
                        className="static-logo" 
                        alt="logo"
                    />
                </header>
                <div className="Grid">
                    {
                        this.props.cards.map((eachCard) => {
                            return <Card key={eachCard.id}/>
                        })
                    }
                </div>
            </div>
        )
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)