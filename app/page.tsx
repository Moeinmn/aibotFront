import Landing from "@/src/modules/landing";
import SelectModalCustom from "@/src/shared/components/modals/SelectModal";
import ChatModalCustom from "@/src/shared/components/modals/chatModal";




export default function Home() {
  return (
  <>
  <Landing/>
  <SelectModalCustom/>
  <ChatModalCustom/>
  </>
  )
}
