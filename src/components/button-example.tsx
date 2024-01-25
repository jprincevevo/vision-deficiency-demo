import { Button } from "@/components/ui/button";
import { colors } from "../utils/colors";
import { getIcon } from "@/utils/get-icon";

const ButtonExample = () => (
  <>
    <h2 className="font-bold text-lg">Buttons</h2>

    <div className="grid grid-cols-2 gap-4 pt-8">
      <div>
        <h3 className="font-bold mb-4">Good</h3>
        {colors.good.map((color, index) => (
          <div key={`good-${color.one}-${color.two}`} className="mb-4">
            <div>
              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{
                  backgroundColor: `rgb(${color.one})`,
                  border: `1px solid rgb(${color.two})`,
                }}
              >
                {getIcon({ index, color: `rgb(${color.two})` })}
              </Button>

              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{
                  backgroundColor: `rgb(${color.two})`,
                  border: `1px solid rgb(${color.two})`,
                }}
              >
                {getIcon({ index, color: `rgb(${color.one})` })}
              </Button>
            </div>

            <div>
              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{
                  backgroundColor: `rgb(${color.one})`,
                  color: `rgb(${color.two})`,
                  fontSize: "16px",
                  border: `1px solid rgb(${color.two})`,
                }}
              >
                Normal
              </Button>

              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{
                  backgroundColor: `rgb(${color.two})`,
                  color: `rgb(${color.one})`,
                  fontSize: "16px",
                  border: `1px solid rgb(${color.two})`,
                }}
              >
                Inverse
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-bold mb-4">Not so good</h3>
        {colors.bad.map((color, index) => (
          <div key={`good-${color.one}-${color.two}`} className="mb-4">
            <div>
              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{ backgroundColor: `rgb(${color.one})` }}
              >
                {getIcon({ index, color: `rgb(${color.two})` })}
              </Button>

              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{ backgroundColor: `rgb(${color.two})` }}
              >
                {getIcon({ index, color: `rgb(${color.one})` })}
              </Button>
            </div>

            <div>
              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{
                  backgroundColor: `rgb(${color.one})`,
                  color: `rgb(${color.two})`,
                  fontSize: "12px",
                }}
              >
                Normal
              </Button>

              <Button
                variant="default"
                className="mr-2 mb-2"
                style={{
                  backgroundColor: `rgb(${color.two})`,
                  color: `rgb(${color.one})`,
                  fontSize: "12px",
                }}
              >
                Inverse
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default ButtonExample;
