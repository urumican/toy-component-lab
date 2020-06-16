import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        console.log("you are not missing the target");
        return;
      }

      console.log("handle the event");
      handler(event);
    };

    console.log("I am constructing this event");
    document.addEventListener("click", listener);
    return () => {
      console.log("I am destructing this event");
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);

  console.log("finish the hook body ----------")
}

export default useClickOutside;
