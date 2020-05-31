import * as React from 'react'
import Config from './config'
import * as Entity from '../model/entity'
import UI from '../ui/ui'

interface Props {
    config: Config
    ui: UI
    entity: Entity.Model
    y: number
}

class NewAttributeView extends React.Component<Props> {

	constructor(props: Props) {
		super(props)
	}

	render() {
        const config = this.props.config
        const entity = this.props.entity
        const width = entity.width/2
        const x = entity.left
        const y = this.props.y
        const yText = y + config.lineHeight/2 + 1 // need to bring it down just slightly
        
		return <g className={`new-button`} id={`${entity.id}-new-attribute`} onClick={this.onClicked.bind(this)}>
            <rect x={x} y={y} width={width} height={config.lineHeight} stroke='transparent'/>
            <text className='plus' x={x + width/2} y={yText}>+ Attr</text>
        </g>
	}
    
    onClicked(evt: React.MouseEvent<SVGElement, MouseEvent>) {
        evt.stopPropagation()
        this.props.ui.interactor.onNewAttributeClicked(this.props.entity)
    }
}
	
export default NewAttributeView