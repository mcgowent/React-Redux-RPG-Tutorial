import React from 'react'
import { connect } from 'react-redux'
// import walkSprite from './player_walk.png'
import walkSprite from './sprites/player_walk.png'
import handleMovement from './movement'

function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: '40px',
                height: '40px',
            }} />
    )
}

function mapStateToProps(state) {
    return {
        // Using the spread allows you to grab all state that gets added without having to add each one
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))