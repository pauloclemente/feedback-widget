import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButtom() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário">
      <X weight="bold" className="h-4 w-4" />
    </Popover.Button>
  )
}