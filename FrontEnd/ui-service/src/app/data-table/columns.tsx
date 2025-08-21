"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
export type Vehicle = {
  id: string
  car_make: string
  car_model: string
  vin: string
  manufactured_date: string
  age_of_vehicle: number
}

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: "car_make",
    header: "Car Make",
  },
  {
    accessorKey: "car_model",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Car Model
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "vin",
    header: "VIN",
  },
  {
    accessorKey: "manufactured_date",
    header: "Manufactured Date",
    cell: ({ row }) => {
        const date = new Date(row.original.manufactured_date)
        return <div>{date.toLocaleDateString()}</div>
    }
  },
  {
    accessorKey: "age_of_vehicle",
    header: "Vehicle Age (Years)",
  },
]
