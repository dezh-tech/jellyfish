"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.features = void 0;
var coral_webp_1 = __importDefault(require("../assets/images/coral.webp"));
var crab_webp_1 = __importDefault(require("../assets/images/crab.webp"));
var dodo_webp_1 = __importDefault(require("../assets/images/dodo.webp"));
// Emoji source: https://symbl.cc/
exports.features = [
    {
        title: 'fast',
        description: 'JellyFish relays are fast as lightning',
        image: crab_webp_1.default
    },
    {
        title: 'easy',
        description: 'JellyFish relays are easy to use',
        image: dodo_webp_1.default
    },
    {
        title: 'safe',
        description: 'Your private notes need auth',
        image: coral_webp_1.default
    }
];
//# sourceMappingURL=features.js.map