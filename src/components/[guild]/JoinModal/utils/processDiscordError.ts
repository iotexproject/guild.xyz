import { ErrorInfo } from "@/components/Error"
import { DiscordError } from "types"
import capitalize from "utils/capitalize"

const processDiscordError = (error: DiscordError): ErrorInfo => ({
  title: capitalize(error.error.replaceAll("_", " ")),
  description: error.errorDescription,
})

export { processDiscordError }
