import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "../icons";

const BetPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    audience: "",
    description: "",
    minStake: "",
    hasDescription: false,
  });

  // Function to update form data
  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submit Data");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              For whom do you create a Bet for?
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => {
                  updateFormData("audience", "everyone");
                  setStep(2);
                }}
                className="w-full p-4 text-left rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                Everyone
              </button>
              <button
                onClick={() => {
                  updateFormData("audience", "friends");
                  setStep(2);
                }}
                className="w-full p-4 text-left rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                Just Friends
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Write a short betting question...
            </h2>
            <Input
              placeholder="Enter your question"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && formData.description) {
                  setStep(3);
                }
              }}
            />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => formData.description && setStep(3)}
            >
              Continue
            </Button>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              How much is the minimum bet stake?
            </h2>
            <div className="relative">
              <Input
                type="number"
                placeholder="5.00"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 pl-8"
                value={formData.minStake}
                onChange={(e) => updateFormData("minStake", e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && formData.minStake) {
                    setStep(4);
                  }
                }}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                $
              </span>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => formData.minStake && setStep(4)}
            >
              Continue
            </Button>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <h2 className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Do you want to add a description?
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => {
                  updateFormData("hasDescription", true);
                  handleSubmit();
                }}
                className="w-full p-4 text-left rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  updateFormData("hasDescription", false);
                  handleSubmit();
                }}
                className="w-full p-4 text-left rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                No
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-10">
        <div className="flex items-center p-4">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="p-2 -ml-2 text-gray-400 hover:text-white"
            >
              <Icons.ChevronLeft className="w-6 h-6" />
            </button>
          )}
          <div className="flex-1 text-center font-medium">Create Bet</div>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
        <div className="h-1 bg-gray-800">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="pt-20 p-4">
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </div>
    </div>
  );
};

export default BetPage;
