import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Nanti kita fix error ini kalau muncul

export function RecentSales() {
  return (
    <div className="space-y-8">
      {/* Item 1 */}
      <div className="flex items-center">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 mr-4">
            OM
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-xs text-muted-foreground text-gray-500">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 mr-4">
            JL
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-xs text-muted-foreground text-gray-500">
            jackson.lee@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>

      {/* Item 3 */}
      <div className="flex items-center">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 mr-4">
            IN
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-xs text-muted-foreground text-gray-500">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>

      {/* Item 4 */}
      <div className="flex items-center">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 mr-4">
            WK
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-xs text-muted-foreground text-gray-500">
            will@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
    </div>
  );
}