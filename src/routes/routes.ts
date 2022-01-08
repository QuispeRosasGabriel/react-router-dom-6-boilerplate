import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}

// LAZY LOADING

const LazyLayout = lazy(/* webpackChunkName: "Lazy Layout" */ () => import('../lazyload/layout/LazyLayout'));

export const routes: Array<Route> = [
    // {
    //     to: '/lazy1',
    //     path: '/lazy1',
    //     Component: Lazy1,
    //     name: 'Lazy1'
    // },
    // {
    //     to: '/lazy2',
    //     path: '/lazy2',
    //     Component: Lazy2,
    //     name: 'Lazy2'
    // },
    // {
    //     to: '/lazy3',
    //     path: '/lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy3'
    // },
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
   

];