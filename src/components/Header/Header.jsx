import React from 'react'
import default_profile_photo from "./default-profile-image.png"

export const Header = () => {

  return (
    <>
      <div className="flex h-24 bg-[#f50101]">
        <div className="shrink w-11/12 border-solid border border-black border-l-0 border-r-0 text-2xl grid place-items-center">
          Searchable Enterprise Directory
        </div>

        <div className="flex-none w-1/12 border-solid border border-black border-r-0 grid place-items-center">
          <img className="object-fill w-10/12 h-10/12" src={default_profile_photo} alt="Profile" />
        </div>
      </div>
    </>
  )
}
