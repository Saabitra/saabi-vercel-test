import { AppBuildManifest } from "next/dist/build/webpack/plugins/app-build-manifest-plugin";

interface Message {
    text: string;
    createdAt: AppBuildManifest.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}