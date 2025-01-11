"use client";

import { useCallback, useMemo, useState } from "react";
import { type FileError, useDropzone } from "react-dropzone";

import * as Icons from "@/components/com/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { generateAcceptObject } from "./utils";

const ERROR_MESSAGE_ACCEPTED_SIZE = "El archivo que seleccionaste es demasiado grande"; // The message is in Spanish, you can change it to English or any other language
const ACCEPTED_FORMAT_FILES = [
	".jpeg",
	".png",
	".jpg",
	".pdf",
	".doc",
	".docx",
	".xls",
	".xlsx",
	".ppt",
	".pptx",
	".pdf",
];

enum FileErrorCode {
	FILE_TOO_LARGE = "file-too-large",
}

type Files = File | File[] | [] | null;

export type FilePickerProps = {
	className?: string;
	classNameInput?: string;
	classNameButton?: string;
	acceptFormatFiles?: string[];
	label: string;
	helperTextBottom?: string;
	errorMsg?: string;
	errorAcceptedSizeMsg?: string;
	onDropLoaded?: (files: Files) => void;
	onError?: (error: Error) => void;
	onStarted?: () => void;
	onDelete?: () => void;
	mode?: "button" | "default";
	startIcon?: React.ReactNode;
	compFormMessage?: React.ReactNode;
	multiple?: boolean;
	maxFiles?: number;
	hasError?: boolean;
	minSizeMB?: number;
	maxSizeMB?: number;
};

export function FilePicker({
	className,
	acceptFormatFiles = ACCEPTED_FORMAT_FILES,
	label,
	errorAcceptedSizeMsg = ERROR_MESSAGE_ACCEPTED_SIZE,
	errorMsg,
	helperTextBottom,
	onDelete,
	startIcon = <Icons.UploadFile />,
	multiple = false,
	maxFiles = 1,
	hasError = false,
	minSizeMB = 0,
	maxSizeMB = 10, // 10MB by default
	onDropLoaded,
	compFormMessage,
	classNameInput,
	classNameButton,
}: FilePickerProps) {
	const [files, setFiles] = useState<File[]>([]);

	const [errorFile, setErrorFile] = useState<FileError | null>(null);

	const accept = useMemo(() => generateAcceptObject(acceptFormatFiles), [acceptFormatFiles]);

	const minSizeBytes = useMemo(() => minSizeMB * 1024 * 1024, [minSizeMB]);
	const maxSizeBytes = useMemo(() => maxSizeMB * 1024 * 1024, [maxSizeMB]);

	const { getRootProps, getInputProps } = useDropzone({
		accept,
		maxSize: maxSizeBytes,
		minSize: minSizeBytes,
		maxFiles,
		multiple,
		onDrop: async (acceptedFiles) => {
			if (acceptedFiles?.length) {
				setFiles(acceptedFiles);
			}
		},
		validator: (file) => {
			let error: FileError | null = null;

			if (file.size > maxSizeBytes) {
				error = {
					code: FileErrorCode.FILE_TOO_LARGE,
					message: errorAcceptedSizeMsg,
				};

				setErrorFile(error);
			}

			return error;
		},
		onDropAccepted: (files) => {
			setErrorFile(null);
			if (onDropLoaded) {
				if (multiple) {
					onDropLoaded(files);
				} else {
					onDropLoaded(files[0]);
				}
			}
		},
	});

	const handleRemoveFile = useCallback(() => {
		if (onDelete) {
			onDelete();
		}
		setFiles([]);

		if (onDropLoaded) {
			if (multiple) {
				onDropLoaded(null);
			} else {
				onDropLoaded(null);
			}
		}
	}, [onDelete, onDropLoaded, multiple]);

	const handleRemoveSpecificFile = useCallback(
		(fileToRemove: File) => {
			setFiles((prevFiles) => {
				const nwFiles = prevFiles.filter((file) => file.name !== fileToRemove.name);

				if (onDropLoaded) {
					if (multiple) {
						onDropLoaded(nwFiles);
					} else {
						onDropLoaded(nwFiles);
					}
				}

				return nwFiles;
			});
		},
		[onDropLoaded, multiple],
	);

	const onlyFileName = useMemo(() => {
		if (Array.isArray(files) && files.length > 0 && !multiple) {
			return files[0].name || "";
		}
		return null;
	}, [files, multiple]);

	return (
		<div className={cn("flex flex-col gap-1", className)}>
			<div className="flex flex-col gap-2">
				{!multiple && (
					<div className="relative">
						<InputFile hasError={hasError} className={classNameInput}>
							{onlyFileName}
						</InputFile>

						{onlyFileName && (
							<button
								className="absolute right-4 top-1/2 -translate-y-1/2 transform"
								type="button"
								onClick={handleRemoveFile}
							>
								<Icons.Close width={16} height={16} color="#DF0000" />
							</button>
						)}
					</div>
				)}

				{multiple && (
					<InputFile hasError={hasError} className={classNameInput}>
						<ScrollArea className="w-full whitespace-nowrap">
							<div className="flex w-full items-center gap-3">
								{files?.length > 0 &&
									files?.map((file) => (
										<div
											key={`${file?.name}-${file?.lastModified}`}
											id="file-1"
											className="flex items-center justify-between gap-2 rounded-sm bg-[#F2F2F5] px-2 py-1"
										>
											<span>{file?.name}</span>
											<button className="" type="button" onClick={() => handleRemoveSpecificFile(file)}>
												<Icons.Close width={16} height={16} color="#DF0000" />
											</button>
										</div>
									))}
							</div>

							<ScrollBar orientation="horizontal" />
						</ScrollArea>
					</InputFile>
				)}

				<div {...getRootProps()}>
					<input {...getInputProps()} />
					<Button type="button" variant="outline" className={cn("w-full", classNameButton)}>
						{startIcon}
						{label}
					</Button>
				</div>
			</div>

			<div id="messages" className="flex flex-col gap-0.5">
				{(errorFile?.message || hasError) && !compFormMessage && (
					<p className="text-xs text-[#D92424]" role="alert">
						{errorFile?.message || errorMsg}
					</p>
				)}

				{compFormMessage}

				{helperTextBottom && <p className="text-pisa-common-black text-xs">{helperTextBottom}</p>}
			</div>
		</div>
	);
}

type InputFileProps = React.ComponentProps<"div"> & {
	hasError?: boolean;
};
export function InputFile({ hasError, className, ...props }: InputFileProps) {
	return (
		<div
			className={cn(
				"flex h-10 w-full items-center rounded-md border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
				className,
				{
					"border-pisa-danger-7": hasError,
				},
			)}
			{...props}
		/>
	);
}
