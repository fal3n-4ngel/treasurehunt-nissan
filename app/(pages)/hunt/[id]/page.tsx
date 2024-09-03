import crypto from 'crypto';

interface HuntPageProps {
  params: { id: string }
}

function generateRandomId(): string {
  return crypto.randomBytes(8).toString('hex'); // 16 character hex string
}

// Array of dummy clue templates
const DUMMY_CLUE_TEMPLATES = [
  "The treasure is hidden {direction} of the {landmark}",
  "Look for a {color} {object} near the {location}",
  "Count {number} steps from the {starting_point} towards the {ending_point}",
  "The secret lies within the {container} at the {place}",
  "Decode the message written on the {surface} of the {item}",
  "Find the {adjective} {noun} and solve its riddle",
  "The key is buried under the {natural_object} in the {area}",
  "Seek the wisdom of the {character} at the {building}",
  "Unravel the mystery of the {enigmatic_object} found in the {room}",
  "Follow the trail of {plural_noun} leading to the {destination}"
];

// Arrays for filling in the templates
const DIRECTIONS = ['north', 'south', 'east', 'west', 'northwest', 'northeast', 'southwest', 'southeast'];
const LANDMARKS = ['old oak tree', 'ancient statue', 'wishing well', 'abandoned lighthouse', 'rusty windmill', 'crumbling tower'];
const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'silver', 'golden'];
const OBJECTS = ['key', 'lock', 'map', 'compass', 'locket', 'ring', 'book', 'scroll'];
const LOCATIONS = ['garden maze', 'hidden cave', 'secret library', 'forgotten attic', 'mysterious cellar', 'enchanted forest'];
const NUMBERS = ['three', 'five', 'seven', 'nine', 'twelve', 'fifteen', 'twenty', 'hundred'];
const PLACES = ['town square', 'old church', 'abandoned mine', 'haunted mansion', 'sunken ship', 'mountain peak'];

function generateRandomClue(): string {
  const template = DUMMY_CLUE_TEMPLATES[Math.floor(Math.random() * DUMMY_CLUE_TEMPLATES.length)];
  return template.replace(/{(\w+)}/g, (_, key) => {
    switch(key) {
      case 'direction': return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
      case 'landmark': return LANDMARKS[Math.floor(Math.random() * LANDMARKS.length)];
      case 'color': return COLORS[Math.floor(Math.random() * COLORS.length)];
      case 'object': return OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
      case 'location': return LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      case 'number': return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
      case 'place': return PLACES[Math.floor(Math.random() * PLACES.length)];
      default: return key;
    }
  });
}

const TOTAL_PAGES = 116; // Total number of dummy pages

export async function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES }, () => ({
    id: generateRandomId(),
  }));
}

export default function HuntPage({ params }: HuntPageProps) {
  const id = params.id;
  const dummyClue = generateRandomClue();

  return (
    <div className="min-h-screen flex flex-col w-full  text-black justify-center items-center p-5">
     
      <h2 className="md:text-[3vw] text-[6vw] md:w-[80%] mx-auto rock-salt-regular text-center">
        {dummyClue}
      </h2>
    </div>
  );
}