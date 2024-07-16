import React from "react";
import AppButton from "./AppButton";

interface BookModalProps {
  coverImage: string;
  title: string;
  author: string;
  synopsis: string; 
  isOpen: boolean;
  onCloseModal: () => void;
}

const BookModal: React.FC<BookModalProps> = ({
  coverImage,
  title,
  author,
  synopsis,
  isOpen,
  onCloseModal,
}) => {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={onCloseModal}
        >     
          <section className="flex flex-col justify-center items-center">
            <div
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex">
                <div className="w-20 m-2">
                  <img className="object-contain" src={coverImage} alt="book" />
                </div>
                <div className="flex flex-col p-2 flex-grow">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p>{author}</p>
                  <p className="py-3">{synopsis}</p>
                </div>
                <p className="font-bold text-xl hover:text-sky-800 cursor-pointer" onClick={onCloseModal}>x</p>
              </div>
              <div className="flex justify-center mt-4">
                <AppButton styles="w-60 hover:border-green-500 hover:text-emerald-900	 border-black border-2 p-4 rounded-full" onClick={()=> console.log("confirmar")} text={"Confirmar Apartado"}/>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default BookModal;
