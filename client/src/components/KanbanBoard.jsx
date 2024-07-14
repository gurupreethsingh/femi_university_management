import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

const KanbanBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Example of a Kanban column */}
      <div className="bg-gray-100 rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-2">To Do</h3>
        <div className="space-y-4">
          {/* Example of a Kanban card */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">Task Title</h4>
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton>
                  <DotsVerticalIcon className="h-5 w-5" />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Edit
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Delete
                      </a>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
            <p className="text-gray-600">Task description goes here.</p>
            <div className="mt-4 flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://via.placeholder.com/150"
                alt=""
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://via.placeholder.com/150"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Repeat similar blocks for other columns */}
    </div>
  );
};

export default KanbanBoard;
