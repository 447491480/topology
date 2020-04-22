import {registerNode} from 'topology-core/middles';
import {
    interfaceClass,
    interfaceClassIconRect,
    interfaceClassTextRect,
    simpleClass,
    simpleClassIconRect,
    simpleClassTextRect
} from './class';

export function register() {
    registerNode('simpleClass', simpleClass, null, simpleClassIconRect, simpleClassTextRect);
    registerNode('interfaceClass', interfaceClass, null, interfaceClassIconRect, interfaceClassTextRect);
}
