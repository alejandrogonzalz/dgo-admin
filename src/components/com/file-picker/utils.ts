export const onConvertByteToKB = (bytes: number) => {
	return Math.round(bytes / 1024);
};

export function generateAcceptObject(acceptedFormats: string[]): Record<string, string[]> {
	return acceptedFormats.reduce(
		(acc, format) => {
			const mimeTypeMap: Record<string, string> = {
				".jpeg": "image/jpeg",
				".jpg": "image/jpeg",
				".png": "image/png",
				".pdf": "application/pdf",
				".doc": "application/msword",
				".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				".xls": "application/vnd.ms-excel",
				".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
				".ppt": "application/vnd.ms-powerpoint",
				".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
			};

			const mimeType = mimeTypeMap[format.toLowerCase()];
			if (mimeType) {
				if (!acc[mimeType]) {
					acc[mimeType] = [];
				}
				acc[mimeType].push(format);
			}
			return acc;
		},
		{} as Record<string, string[]>,
	);
}
