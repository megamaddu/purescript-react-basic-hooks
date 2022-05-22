import React from "react";

const useEqCache = (eq, a) => {
  const memoRef = React.useRef(a);
  if (memoRef.current !== a && !eq(memoRef.current, a)) {
    memoRef.current = a;
  }
  return memoRef.current;
};

export function reactChildrenToArray(children) {
  return React.Children.toArray(children);
}

export var memo_ = React.memo;

export function useState_(tuple, initialState) {
  const [state, setState] = React.useState(
    typeof initialState === "function" ? () => initialState : initialState
  );
  if (!setState.hasOwnProperty("$$reactBasicHooks$$cachedSetState")) {
    setState.$$reactBasicHooks$$cachedSetState = (update) => () =>
      setState(update);
  }
  return tuple(state, setState.$$reactBasicHooks$$cachedSetState);
}

export function useEffect_(eq, deps, effect) {
  const memoizedKey = useEqCache(eq, deps);
  React.useEffect(effect, [memoizedKey]);
}

export function useEffectAlways_(effect) {
  return React.useEffect(effect);
}

export function useLayoutEffect_(eq, deps, effect) {
  const memoizedKey = useEqCache(eq, deps);
  React.useLayoutEffect(effect, [memoizedKey]);
}

export function useLayoutEffectAlways_(effect) {
  return React.useLayoutEffect(effect);
}

export function useReducer_(tuple, reducer, initialState) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  if (!dispatch.hasOwnProperty("$$reactBasicHooks$$cachedDispatch")) {
    dispatch.$$reactBasicHooks$$cachedDispatch = (action) => () =>
      dispatch(action);
  }
  return tuple(state, dispatch.$$reactBasicHooks$$cachedDispatch);
}

export var useRef_ = React.useRef;

export function readRef_(ref) {
  return ref.current;
}

export function writeRef_(ref, a) {
  ref.current = a;
}

export var useContext_ = React.useContext;
export { useEqCache as useEqCache_ };

export function useMemo_(eq, deps, computeA) {
  const memoizedKey = useEqCache(eq, deps);
  return React.useMemo(computeA, [memoizedKey]);
}

export var useDebugValue_ = React.useDebugValue;

export function unsafeSetDisplayName(displayName, component) {
  component.displayName = displayName;
  component.toString = () => displayName;
  return component;
}

export function displayName(component) {
  return typeof component === "string"
    ? component
    : component.displayName || "[unknown]";
}
